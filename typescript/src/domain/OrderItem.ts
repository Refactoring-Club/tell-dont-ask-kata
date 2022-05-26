import Product from './Product';

class OrderItem {
  private product: Product;
  private quantity: number;

  public constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  public getProduct(): Product {
    return this.product;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public getTaxedAmount(): number {
    return this.product.taxedAmount(this.quantity);
  }

  public getTax(): number {
    return this.product.taxAmount(this.quantity);
  }
}

export default OrderItem;

