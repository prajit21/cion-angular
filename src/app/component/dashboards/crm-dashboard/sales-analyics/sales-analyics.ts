import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { CommonAnalyics } from './common-analyics/common-analyics';
import * as salesChart from '../../../../shared/data/component/deshboard/crm-dashboard-charts';

@Component({
  selector: 'app-sales-analyics',
  imports: [NgApexchartsModule, CommonAnalyics],
  templateUrl: './sales-analyics.html',
  styleUrls: ['./sales-analyics.scss'],
})
export class SalesAnalyics {
  public SalesAnalyticData = salesChart.SalesAnalytics;
}
