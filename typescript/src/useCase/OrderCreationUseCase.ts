import Order from '../domain/Order';
import OrderItem from '../domain/OrderItem';
import Product from '../domain/Product';
import OrderRepository from '../repository/OrderRepository';
import { ProductCatalog } from '../repository/ProductCatalog';
import SellItemsRequest from './SellItemsRequest';
import UnknownProductException from './UnknownProductException';

class OrderCreationUseCase {
  private readonly orderRepository: OrderRepository;
  private readonly productCatalog: ProductCatalog;

  public constructor(orderRepository: OrderRepository, productCatalog: ProductCatalog) {
    this.orderRepository = orderRepository;
    this.productCatalog = productCatalog;
  }

  public run(request: SellItemsRequest): void {
    const order: Order = new Order();

    for (const itemRequest of request.getRequests()) {
      const product: Product = this.productCatalog.getByName(itemRequest.getProductName());

      if (product === undefined) {
        throw new UnknownProductException();
      }
      else {
        const taxAmount: number = product.taxAmount(itemRequest.getQuantity());

        const orderItem: OrderItem = new OrderItem(product, itemRequest.getQuantity());
        order.getItems().push(orderItem);

        order.setTax(order.getTax() + taxAmount);
      }
    }

    this.orderRepository.save(order);
  }
}

export default OrderCreationUseCase;
