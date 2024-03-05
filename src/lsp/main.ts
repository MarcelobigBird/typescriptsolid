/**
 * * Liskov substitution principle (Princípio da substituição de liskov) -
 * Se  PI(x) é uma propriedade demonstrável dos objetos x de tipo T. Então PI(y)
 * deve ser verdadeiro para objetos y de tipo S onde S é um tipo de T.
 *
 * Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
 * Mais simples ainda: Se meu programa espera um Animal, algo do tipo
 * Cachorro (que herda de Animal) dever servir como qualquer outro Animal.
 */
import { Order } from './classes/order';
import { ShoppingCart } from './classes/interfaces/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/interfaces/discount';

/* eslint-disable @typescript-eslint/no-unused-vars */

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.99));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

/* eslint-enable @typescript-eslint/no-unused-vars */
