import { Cart } from "./Cart";
import { ProductType } from "./interfaces/ProductType";

const createItemMock = (name: string, price: number, category: string):ProductType => {
    class ProductMock implements ProductType {
        name: string
        price: number
        category: string
        constructor(name: string, price: number, category: string) {
            this.name = name
            this.price = price
            this.category = category
        }
    }
    return new ProductMock(name, price, category)
}
const createCartMock = ():Cart => {
    class CartMock extends Cart { }
    return new CartMock()
}

describe('TestCart', () => {
    test('Should add item to cart', () => {
        const sutCart=createCartMock()
        const p1=createItemMock('PS4',2100,'CONSOLE')
        const p2=createItemMock('PS5',5000,'CONSOLE')
        sutCart.AddProduct(p1)
        sutCart.AddProduct(p2)
        expect(sutCart.cartItems.length).toBe(2)
    })
    test('Should add products and clear cart',()=>{
        const sutCart=createCartMock()
        const p1=createItemMock('PS4',2100,'CONSOLE')
        const p2=createItemMock('PS5',5000,'CONSOLE')
        sutCart.AddProduct(p1)
        sutCart.AddProduct(p2)
        expect(sutCart.cartItems.length).toBeLessThan(3)
        sutCart.clearCart()
        expect(sutCart.checkIsEmpty()).toBeTruthy()
    })
    test('Should remove product',()=>{
        const sutCart=createCartMock()
        const p1=createItemMock('PS4',2100,'CONSOLE')
        const p2=createItemMock('PS5',5000,'CONSOLE')
        sutCart.AddProduct(p1)
        sutCart.AddProduct(p2)
        sutCart.RemoveItem(1)
        expect(sutCart.cartItems.length).toBe(1)
    })
})