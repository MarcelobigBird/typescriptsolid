import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  public get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido com total de R$ ${this.cart.totalWithDicount()} foi recebido`);
    this.persistency.saveOrder();
    this.cart.clear();

    console.log('The customer and', this.customer.getName(), 'com o cpf:', this.customer.getIDN());
  }
}
