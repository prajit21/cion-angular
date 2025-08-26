import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-basic-area-chart',
  imports: [NgApexchartsModule],
  templateUrl: './basic-area-chart.html',
  styleUrls: ['./basic-area-chart.scss'],
})
export class BasicAreaChart {
  public turnover = chartData.splineArea1;
}
