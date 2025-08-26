import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-radial-bar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './radial-bar-chart.html',
  styleUrls: ['./radial-bar-chart.scss'],
})
export class RadialBarChart {
  public radialBarChart = chartData.radialBarChart;
}
