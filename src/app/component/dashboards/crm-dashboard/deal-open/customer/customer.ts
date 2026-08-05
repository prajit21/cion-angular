import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { customer } from '../../../../../shared/data/component/deshboard/crm-dashboard';
import * as customerChats from '../../../../../shared/data/component/deshboard/crm-dashboard-charts';

@Component({
  selector: 'app-customer',
  imports: [NgApexchartsModule],
  templateUrl: './customer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./customer.scss'],
})
export class Customer {
  public CustomerData = customer;
  public CustomerChatData = customerChats.customerChat;
}
