import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as balanceChart from '../../../../shared/data/component/deshboard/crm-dashboard-charts';

@Component({
  selector: 'app-balance-overview',
  imports: [NgApexchartsModule],
  templateUrl: './balance-overview.html',
  styleUrls: ['./balance-overview.scss'],
})
export class BalanceOverview {
  public balanceOverviewData = balanceChart.balanceOverview;
}
