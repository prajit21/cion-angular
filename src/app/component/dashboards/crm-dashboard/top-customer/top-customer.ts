import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TopCustomers } from '../../../../shared/data/component/deshboard/crm-dashboard';

@Component({
  selector: 'app-top-customer',
  imports: [CommonModule],
  templateUrl: './top-customer.html',
  styleUrls: ['./top-customer.scss'],
})
export class TopCustomer {
  public topcustomerdata = TopCustomers;
}
