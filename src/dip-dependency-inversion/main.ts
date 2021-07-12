/*
  Módulos de alto nível não devem depender de módulos de baixo nível.
  Ambos devem depender de abstrações.
  Dependa de abstrações, não de implementações.
  Abstrações não devem depender de detalhes,
  detalhes que devem depender de aplicações.

  Classe de baixo nível são classes que executam tarefas(os detalhes).
  Classe de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/interfaces/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/interfaces/product';
import { ShoppingCart } from './classes/interfaces/shopping-cart';
import { NoDiscount } from './classes/interfaces/discount';
import { IndividualCustomer } from './classes/interfaces/customer';
// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shopCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'luiz',
  'miranda',
  '111.111.111-00',
);
// const enterpriseCustomer = new EnterpriseCustomer(
//   'empresa gigante',
//   '222-22-22222222',
// );
// class MessagingMock implements MessagingProtocol {
//   sendMessage(): void {
//     console.log('a msg foi enviada pelo MOCK');
//   }
// }

// const msgMock = new MessagingMock();

const order = new Order(shopCart, messaging, persistency, individualCustomer);

shopCart.addItem(new Product('camiseta', 49.9));
shopCart.addItem(new Product('caderno', 19.9));
shopCart.addItem(new Product('caneta', 3.9));

console.log(shopCart.items);
console.log(shopCart.total());
console.log(shopCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
