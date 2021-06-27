import { Product } from "./Product";

const createSut=(name:string,price:number,category:string):Product=>{
    return new Product(name,price,category)
}

describe('Product Test',()=>{
    it('Should be params',()=>{
        const sut=createSut('PS4',2100,'console')
        expect(sut).toHaveProperty('name','PS4')
        expect(sut).toHaveProperty('price',2100)
        expect(sut).toHaveProperty('category','console')
    })
})