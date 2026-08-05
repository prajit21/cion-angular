import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BecomeMember } from './become-member/become-member';
import { SimpleCardPricing } from './simple-card-pricing/simple-card-pricing';

@Component({
  selector: 'app-pricing',
  imports: [BecomeMember, SimpleCardPricing],
  templateUrl: './pricing.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./pricing.scss'],
})
export class Pricing {}
