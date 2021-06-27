import { CartProtocol } from './interfaces/CartProtocol';
import { SendMessageProtocol } from './interfaces/MsgProtocol';
import { TypeCustomer } from './interfaces/CustomerProtocol';

export class Order {
  private OrderStatus: 'open' | 'closed' = 'closed';
  private Cart: CartProtocol;
  private Msg: SendMessageProtocol;
  private Customer:TypeCustomer
  constructor(Cart: CartProtocol,Msg:SendMessageProtocol,Customer:TypeCustomer) {
    this.Cart = Cart;
    this.Msg=Msg
    this.Customer=Customer
  }
  //Order
  saveOrder(): void {
    console.log(`\u2705 - Produto Salvo com sucesso!`);
    console.log(`\u270D Descrição---- \n Total: ${this.Cart.getTotalPrice()}
        ${this.Customer.getInfo()}
    ----`);
  }
  //Order
  checkout(): void {

    if (this.Cart.checkIsEmpty()) {
      console.log('Sorry, this cart is empty');
      return;
    }
    this.OrderStatus = 'open';
    this.Msg.sendMessage({ msg: 'Salvando', name: 'Status' });
    this.saveOrder();
    this.Cart.clearCart();
  }
}
