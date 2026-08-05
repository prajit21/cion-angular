import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-bar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./bar-chart.scss'],
})
export class BarChart {
  public barChart = chartData.barChart;
}
