import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TopCustomers } from '../../../../shared/data/component/deshboard/crm-dashboard';

@Component({
  selector: 'app-top-customer',
  imports: [NgClass],
  templateUrl: './top-customer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./top-customer.scss'],
})
export class TopCustomer {
  public topcustomerdata = TopCustomers;
}
