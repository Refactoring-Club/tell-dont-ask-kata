import OrderItem from './OrderItem';
import { OrderStatus } from './OrderStatus';

class Order {
  private currency: string = 'EUR';
  private items: OrderItem[] = [];
  private status: OrderStatus = OrderStatus.CREATED;
  private id: number;

  public getTotal(): number {
    return this.items.reduce((orderTotal, orderItem) => orderTotal + orderItem.getTaxedAmount(), 0);
  }

  public getCurrency(): string {
    return this.currency;
  }

  public getItems(): OrderItem[] {
    return this.items;
  }

  public getTax(): number {
    return this.items.reduce((orderTotal, orderItem) => orderTotal + orderItem.getTax(), 0);
  }

  public getStatus(): OrderStatus {
    return this.status;
  }

  public setStatus(status: OrderStatus): void {
    this.status = status;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public addItem(item: OrderItem): void {
    this.items.push(item);
  }
}

export default Order;

