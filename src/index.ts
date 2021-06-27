import { Cart } from './classes/Cart';
import { CustomerPhysical } from './classes/Customer';
import { Order } from './classes/Order';
import { Product } from './classes/Product';
import { SendMessage } from './services/SendMessage';

const shoppingCart = new Cart();
shoppingCart.AddProduct({ name: 'PS5', price: 5000, category: 'Console' });
shoppingCart.AddProduct(new Product('PS5', 5000, 'Console'));
shoppingCart.AddProduct(new Product('PS4', 3000, 'Console'));

const order = new Order(
  shoppingCart,
  new SendMessage(),
  new CustomerPhysical('Davi Silva da Penha', 19, '012-541-287-58')
);

order.checkout();
