import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './interfaces/shopping-cart';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
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
    this.messaging.sendMessage(`Seu pedido com total de R$ ${this.cart.total()} foi recebido.`);
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
