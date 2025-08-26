import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as SalesSummarys from '../../../../shared/data/component/deshboard/charts';

@Component({
  selector: 'app-sales-summary',
  imports: [NgApexchartsModule],
  templateUrl: './sales-summary.html',
  styleUrls: ['./sales-summary.scss'],
})
export class SalesSummary {
  public salesChartdata = SalesSummarys.saleSummarychart;
}
