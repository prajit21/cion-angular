import { Component, ChangeDetectionStrategy } from '@angular/core';

import { simplePricingCard } from '../../../../shared/data/component/e-commerce/pricing';

@Component({
  selector: 'app-simple-card-pricing',
  imports: [],
  templateUrl: './simple-card-pricing.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./simple-card-pricing.scss'],
})
export class SimpleCardPricing {
  public simplepricing = simplePricingCard;
}
