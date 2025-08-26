import { Component } from '@angular/core';

import {
  UnorderList,
  orderList,
} from '../../,./../../../shared/data/component/ui-kits/typogaraphy/typogaraphy';

@Component({
  selector: 'app-listing-typography',
  imports: [],
  templateUrl: './listing-typography.html',
  styleUrls: ['./listing-typography.scss'],
})
export class ListingTypography {
  public listData = UnorderList;
  public orderData = orderList;
}
