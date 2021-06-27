import { ProductType } from "./interfaces/ProductType";

export class Product implements ProductType{
    name:string
    price:number
    category:string
    constructor(name:string,price:number,category:string){
        this.name=name
        this.price=price
        this.category=category
    }
}
