export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount: number = 50;

  public calculate(price: number): number {
    return +(price - price * (this.discount / 100)).toFixed(2);
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount: number = 10;

  public calculate(price: number): number {
    return +(price - price * (this.discount / 100)).toFixed(2);
  }
}

export class NoDiscount extends Discount {
  public calculate(price: number): number {
    return price;
  }
}
