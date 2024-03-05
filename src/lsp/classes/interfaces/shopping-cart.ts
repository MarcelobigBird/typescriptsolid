import { CartItem } from './cart-item';
import { Discount } from './discount';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  public addItem(item: CartItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  public get items(): Readonly<CartItem[]> {
    return this._items;
  }

  public total(): number {
    return +this._items.reduce((acumulator, value) => acumulator + value.price, 0).toFixed(2);
  }

  public totalWithDiscount(): number {
    const result = this.discount.calculate(this.total());

    if (typeof result === 'number') return parseFloat(result.toFixed(2));
    return this.total();
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}
