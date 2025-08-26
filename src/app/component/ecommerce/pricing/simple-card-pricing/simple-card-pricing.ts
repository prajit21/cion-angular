import { Component } from '@angular/core';

import { simplePricingCard } from '../../../../shared/data/component/e-commerce/pricing';

@Component({
  selector: 'app-simple-card-pricing',
  imports: [],
  templateUrl: './simple-card-pricing.html',
  styleUrls: ['./simple-card-pricing.scss'],
})
export class SimpleCardPricing {
  public simplepricing = simplePricingCard;
}
