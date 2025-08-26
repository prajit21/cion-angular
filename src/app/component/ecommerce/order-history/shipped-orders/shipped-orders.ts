import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { ShippedOrder, Order } from '../../../../shared/data/component/e-commerce/orders';

@Component({
  selector: 'app-shipped-orders',
  imports: [Feathericon, NgbRatingModule],
  templateUrl: './shipped-orders.html',
  styleUrls: ['./shipped-orders.scss'],
})
export class ShippedOrders {
  public rateing = 5;

  private config = inject(NgbRatingConfig);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }

  public shipped = ShippedOrder;

  close(item: Order) {
    this.shipped.splice(this.shipped.indexOf(item), 1);
  }
}
