import { Injectable } from '@angular/core';

export interface Order {
  orderId: string;
  stockName: string;
  buyPrice: number;
  sellPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    { orderId: 'ORD001', stockName: 'AAPL', buyPrice: 150.25, sellPrice: 155.80 },
    { orderId: 'ORD002', stockName: 'GOOGL', buyPrice: 2750.50, sellPrice: 2800.25 },
    { orderId: 'ORD003', stockName: 'MSFT', buyPrice: 305.75, sellPrice: 310.50 },
    { orderId: 'ORD004', stockName: 'TSLA', buyPrice: 720.00, sellPrice: 735.60 },
    { orderId: 'ORD005', stockName: 'AMZN', buyPrice: 3200.00, sellPrice: 3250.75 }
  ];

  getOrders(): Order[] {
    return this.orders;
  }

  updateOrder(updatedOrder: Order): void {
    const index = this.orders.findIndex(order => order.orderId === updatedOrder.orderId);
    if (index !== -1) {
      this.orders[index] = updatedOrder;
    }
  }

  deleteOrder(orderId: string): void {
    this.orders = this.orders.filter(order => order.orderId !== orderId);
  }
}
