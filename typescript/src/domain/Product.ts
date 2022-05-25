import Category from './Category';

class Product {
  private name: string;
  private price: number;
  private category: Category;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getCategory(): Category {
    return this.category;
  }

  public setCategory(category: Category): void {
    this.category = category;
  }

  public unitaryTax(): number {
    return Math.round(this.getPrice() / 100 * this.getCategory().getTaxPercentage() * 100) / 100;
  }

  public unitaryTaxedAmount(): number {
    return Math.round((this.getPrice() + this.unitaryTax()) * 100) / 100;
  }

  public taxedAmount(quantity: number): number {
    return Math.round(this.unitaryTaxedAmount() * quantity * 100) / 100;
  }

  public taxAmount(quantity: number): number {
    return this.unitaryTax() * quantity;
  }
}

export default Product;

