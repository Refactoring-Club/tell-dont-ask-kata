import Product from './Product';

class OrderItem {
  private product: Product;
  private quantity: number;

  public getProduct(): Product {
    return this.product;
  }

  public setProduct(product: Product): void {
    this.product = product;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public getTaxedAmount(): number {
    return this.product.taxedAmount(this.quantity);
  }

  public getTax(): number {
    return this.product.taxAmount(this.quantity);
  }
}

export default OrderItem;

