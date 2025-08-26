import { Component } from '@angular/core';

import { BecomeMember } from './become-member/become-member';
import { SimpleCardPricing } from './simple-card-pricing/simple-card-pricing';

@Component({
  selector: 'app-pricing',
  imports: [BecomeMember, SimpleCardPricing],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.scss'],
})
export class Pricing {}
