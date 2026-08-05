import { Component, ChangeDetectionStrategy } from '@angular/core';

import { recentOrder } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-recent-orders',
  imports: [],
  templateUrl: './recent-orders.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./recent-orders.scss'],
})
export class RecentOrders {
  public orderitem = recentOrder;
}
