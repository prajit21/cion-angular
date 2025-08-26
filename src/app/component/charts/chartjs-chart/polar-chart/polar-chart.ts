import { Component } from '@angular/core';

import { PolarAreaController } from 'chart.js';
import { BaseChartDirective, provideCharts } from 'ng2-charts';

import * as chartData from '../../../../shared/data/component/charts/chartjs';

@Component({
  selector: 'app-polar-chart',
  imports: [BaseChartDirective],
  providers: [provideCharts({ registerables: [PolarAreaController] })],
  templateUrl: './polar-chart.html',
  styleUrls: ['./polar-chart.scss'],
})
export class PolarChart {
  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartColors = chartData.polarChartColors;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;
}
