import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ArcElement, DoughnutController } from 'chart.js';
import { BaseChartDirective, provideCharts } from 'ng2-charts';

import * as chartData from '../../../../shared/data/component/charts/chartjs';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.html',
  styleUrls: ['./doughnut-chart.scss'],
  imports: [BaseChartDirective],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [provideCharts({ registerables: [DoughnutController, ArcElement] })],
})
export class DoughnutChart {
  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartOptions = chartData.doughnutChartOptions;
  public doughnutChartLegend = chartData.doughnutChartLegend;
}
