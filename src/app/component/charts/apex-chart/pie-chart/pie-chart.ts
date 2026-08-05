import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-pie-chart',
  imports: [NgApexchartsModule],
  templateUrl: './pie-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./pie-chart.scss'],
})
export class PieChart {
  public pieChart = chartData.pieChart;
}
