import { CartItem } from './cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}
