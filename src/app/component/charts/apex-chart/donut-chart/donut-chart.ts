import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-donut-chart',
  imports: [NgApexchartsModule],
  templateUrl: './donut-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./donut-chart.scss'],
})
export class DonutChart {
  public donutChart = chartData.donutChart;
}
