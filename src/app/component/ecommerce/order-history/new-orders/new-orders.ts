import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { Neworders, Order } from '../../../../shared/data/component/e-commerce/orders';

@Component({
  selector: 'app-new-orders',
  imports: [Feathericon, NgbRatingModule],
  templateUrl: './new-orders.html',
  styleUrls: ['./new-orders.scss'],
})
export class NewOrders {
  public rateing = 5;
  public orders = Neworders;

  private config = inject(NgbRatingConfig);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }

  close(item: Order) {
    this.orders.splice(this.orders.indexOf(item), 1);
  }
}
