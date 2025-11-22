import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from '../../services/order.service';
import { TableColumn, TableAction } from '../../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  pageName = 'Order History';
  orders: Order[] = [];

  columns: TableColumn[] = [
    { key: 'orderId', header: 'Order ID', editable: false },
    { key: 'stockName', header: 'Stock Name', editable: true, type: 'text' },
    { key: 'buyPrice', header: 'Buy Price', editable: true, type: 'number' },
    { key: 'sellPrice', header: 'Sell Price', editable: true, type: 'number' }
  ];

  actions: TableAction[] = [
    {
      label: 'Edit',
      icon: '✏️',
      action: 'edit'
    },
    {
      label: 'Delete',
      icon: '🗑️',
      callback: (row: Order) => this.deleteOrder(row.orderId)
    }
  ];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

  onDataUpdated(updatedOrder: Order): void {
    this.orderService.updateOrder(updatedOrder);
    this.orders = this.orderService.getOrders();
  }

  deleteOrder(orderId: string): void {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.deleteOrder(orderId);
      this.orders = this.orderService.getOrders();
    }
  }
}
