import { CartProtocol } from "./interfaces/CartProtocol"
import { CartType } from "./interfaces/CartType"

export class Cart implements CartProtocol{
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
        if(this.cartItems.length){
            return false
        }
        return true
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


