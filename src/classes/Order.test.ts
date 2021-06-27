import { TypeCustomer } from './interfaces/CustomerProtocol';
import { CartProtocol } from "./interfaces/CartProtocol";
import { CartType } from "./interfaces/CartType";
import { SendMessageProtocol } from "./interfaces/MsgProtocol";
import { MsgType } from "./interfaces/TypeMsg";
import { Order } from './Order';


class CartMock implements CartProtocol{
    readonly cartItems:CartType[]=[]

    AddProduct(item:CartType):void{
        this.cartItems.push(item)
    }
    RemoveItem(IdProduct:number):void{
        this.cartItems.splice(IdProduct,1)
    }
    getTotalPrice():number{
        return this.cartItems.reduce((ac,next)=>{
            return ac+=next.price
        },0)
    }
    checkIsEmpty():boolean{
        // if(this.cartItems.length){
        //     return false
        // }
        // return true
        return false
    }
    clearCart():void{
        this.cartItems.length=0
    }
    //
    listCart():void{
       for(const item of this.cartItems){
            console.log('\u270C')
            console.log(item)
       }
    }
}
class SendMessageMock implements SendMessageProtocol{
    sendMessage(obj:MsgType):void{
        console.log(`\u007E ${obj.msg} -> Status: ${obj.name}`)
    }
}
class CustomerMock implements TypeCustomer{
    cpf:string
    name:string
    age:number
    constructor(name:string,age:number,cpf:string){
        this.cpf=cpf
        this.name=name
        this.age=age
    }
    getInfo():string{
        return `
            Customer Physical: \n
            Name: ${this.name},\n
            Age: ${this.age}, \n
            Cpf: ${this.cpf}
        `
    }
}
const makeSut=()=>{
    const customerMock=new CustomerMock('Davi Silva',19,'542.658.871')
    const sendMessageMock=new SendMessageMock()
    const cartMock=new CartMock()
    const sut=new Order(cartMock,sendMessageMock,customerMock)
    return {
        sut,
        cartMock,
        sendMessageMock,
        customerMock
    }
}

describe('Order test',()=>{
    afterEach(()=>jest.clearAllMocks())
    test('Should execute checkout method in Order',()=>{
        const {sut,sendMessageMock}=makeSut()
        const spyCheckout=jest.spyOn(sendMessageMock,'sendMessage')
        const spySaveOrder=jest.spyOn(sut,'saveOrder')

        sut.checkout()
        expect(spyCheckout).toHaveBeenCalledWith({msg:'Salvando',name:'Status'})
        expect(spySaveOrder).toHaveBeenCalledTimes(1)

    })
    test('Should run method clearCart once',()=>{
        const {sut,cartMock}=makeSut()
        const spyClearCartMock=jest.spyOn(cartMock,'clearCart')
        sut.checkout()
        expect(spyClearCartMock).toHaveBeenCalled()
    })
})