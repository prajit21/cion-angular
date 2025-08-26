import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as historyChart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-monthly-history',
  imports: [NgApexchartsModule],
  templateUrl: './monthly-history.html',
  styleUrls: ['./monthly-history.scss'],
})
export class MonthlyHistory {
  public MonthlyHistoryData = historyChart.MonthlyHistory;
}
