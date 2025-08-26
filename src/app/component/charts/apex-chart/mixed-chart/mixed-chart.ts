import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-mixed-chart',
  imports: [NgApexchartsModule],
  templateUrl: './mixed-chart.html',
  styleUrls: ['./mixed-chart.scss'],
})
export class MixedChart {
  public mixedChart = chartData.mixedChart;
}
