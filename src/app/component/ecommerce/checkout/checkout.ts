import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BillingDetails } from './billing-details/billing-details';
import { ProductTotal } from './product-total/product-total';

@Component({
  selector: 'app-checkout',
  imports: [BillingDetails, ProductTotal],
  templateUrl: './checkout.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./checkout.scss'],
})
export class Checkout {}
