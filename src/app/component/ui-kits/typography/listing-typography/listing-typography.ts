import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  UnorderList,
  orderList,
} from '../../,./../../../shared/data/component/ui-kits/typogaraphy/typogaraphy';

@Component({
  selector: 'app-listing-typography',
  imports: [],
  templateUrl: './listing-typography.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./listing-typography.scss'],
})
export class ListingTypography {
  public listData = UnorderList;
  public orderData = orderList;
}
