/**
 * Interface segregation principle (Princípio da segregação de Interface) -
 * os clientes não devem ser forçados a depender de types, interfaces ou membros abstratos que não utilizam.

 */
import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

/* eslint-disable @typescript-eslint/no-unused-vars */

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Marcelo', 'Pereira dos Santos', '111.111.111-11');
const enterpriseCustomer = new EnterpriseCustomer('Empresa gigante', '11.111.111/0001-11');

const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.99));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

/* eslint-enable @typescript-eslint/no-unused-vars */
