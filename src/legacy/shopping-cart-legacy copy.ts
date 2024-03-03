type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  public addItem(item: CartItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  public get items(): Readonly<CartItem[]> {
    return this._items;
  }

  public get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public total(): number {
    return +this._items.reduce((acumulator, value) => acumulator + value.price, 0).toFixed(2);
  }

  public checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de R$ ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public sendMessage(msg: string): void {
    console.log('Mensagem enviada: ' + msg);
  }

  public saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  public clear(): void {
    console.log('Carrinhos de compras foi limpo');
    this._items.length = 0;
  }
}

const shoppingCarLegacy = new ShoppingCartLegacy();
shoppingCarLegacy.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCarLegacy.addItem({ name: 'Caderno', price: 9.9 });
shoppingCarLegacy.addItem({ name: 'Lápis', price: 1.99 });

console.log(shoppingCarLegacy.items);
console.log(shoppingCarLegacy.total());
console.log(shoppingCarLegacy.orderStatus);
shoppingCarLegacy.checkout();
console.log(shoppingCarLegacy.orderStatus);
