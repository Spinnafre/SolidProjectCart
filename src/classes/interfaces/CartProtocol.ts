import { CartType } from './CartType';

export interface CartProtocol{
    readonly cartItems:CartType[]
    AddProduct(item:CartType):void
    RemoveItem(IdProduct:number):void
    getTotalPrice():number
    checkIsEmpty():boolean
    clearCart():void
    listCart():void
}
