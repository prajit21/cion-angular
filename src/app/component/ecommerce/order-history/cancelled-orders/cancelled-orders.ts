import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { CancelledOrder, Order } from '../../../../shared/data/component/e-commerce/orders';

@Component({
  selector: 'app-cancelled-orders',
  imports: [Feathericon, NgbRatingModule],
  templateUrl: './cancelled-orders.html',
  styleUrls: ['./cancelled-orders.scss'],
})
export class CancelledOrders {
  public rateing = 5;

  private config = inject(NgbRatingConfig);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }

  public cancelled = CancelledOrder;

  close(item: Order) {
    this.cancelled.splice(this.cancelled.indexOf(item), 1);
  }
}
