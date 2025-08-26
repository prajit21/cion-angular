import { Component } from '@angular/core';

import { BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { BaseChartDirective, provideCharts } from 'ng2-charts';

import { barChart } from '../../../../shared/data/component/charts/chartjs';

@Component({
  selector: 'app-bars-chart',
  imports: [BaseChartDirective],
  providers: [
    provideCharts({
      registerables: [BarController, CategoryScale, LinearScale, BarElement],
    }),
  ],
  templateUrl: './bars-chart.html',
  styleUrls: ['./bars-chart.scss'],
})
export class BarsChart {
  public barChart = barChart;
}
