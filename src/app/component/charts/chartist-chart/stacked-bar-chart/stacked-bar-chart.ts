import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-stacked-bar-chart',
  imports: [ChartistModule],
  templateUrl: './stacked-bar-chart.html',
  styleUrls: ['./stacked-bar-chart.scss'],
})
export class StackedBarChart {
  public chart7 = chartData.chart7;
}
