import { Component } from '@angular/core';

import { AllNotification } from './all-notification/all-notification';
import { BalanceOverview } from './balance-overview/balance-overview';
import { DealOpen } from './deal-open/deal-open';
import { SalesAnalyics } from './sales-analyics/sales-analyics';
import { TopCustomer } from './top-customer/top-customer';
import { UpdateCard } from './update-card/update-card';

@Component({
  selector: 'app-crm-dashboard',
  imports: [UpdateCard, TopCustomer, AllNotification, BalanceOverview, SalesAnalyics, DealOpen],
  templateUrl: './crm-dashboard.html',
  styleUrls: ['./crm-dashboard.scss'],
})
export class CrmDashboard {}
