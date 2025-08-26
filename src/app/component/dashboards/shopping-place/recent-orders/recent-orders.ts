import { Component } from '@angular/core';

import { recentOrder } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-recent-orders',
  imports: [],
  templateUrl: './recent-orders.html',
  styleUrls: ['./recent-orders.scss'],
})
export class RecentOrders {
  public orderitem = recentOrder;
}
