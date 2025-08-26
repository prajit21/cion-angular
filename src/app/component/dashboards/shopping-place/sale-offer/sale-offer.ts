import { Component } from '@angular/core';

import { saleProductoffer } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-sale-offer',
  imports: [],
  templateUrl: './sale-offer.html',
  styleUrls: ['./sale-offer.scss'],
})
export class SaleOffer {
  public salesofferData = saleProductoffer;
}
