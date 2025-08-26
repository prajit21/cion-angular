import { Component } from '@angular/core';

import { commonData } from '../../../../shared/data/component/widget/general/general';

@Component({
  selector: 'app-sales-purchase',
  imports: [],
  templateUrl: './sales-purchase.html',
  styleUrls: ['./sales-purchase.scss'],
})
export class SalesPurchase {
  public commonData = commonData;
}
