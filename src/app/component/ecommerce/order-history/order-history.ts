import { Component } from '@angular/core';

import { CancelledOrders } from './cancelled-orders/cancelled-orders';
import { DatatableOrderHistory } from './datatable-order-history/datatable-order-history';
import { NewOrders } from './new-orders/new-orders';
import { ShippedOrders } from './shipped-orders/shipped-orders';

@Component({
  selector: 'app-order-history',
  imports: [NewOrders, ShippedOrders, CancelledOrders, DatatableOrderHistory],
  templateUrl: './order-history.html',
  styleUrls: ['./order-history.scss'],
})
export class OrderHistory {}
