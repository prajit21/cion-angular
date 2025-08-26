import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-bi-polar-bar-chart',
  imports: [ChartistModule],
  templateUrl: './bi-polar-bar-chart.html',
  styleUrls: ['./bi-polar-bar-chart.scss'],
})
export class BiPolarBarChart {
  public chart6 = chartData.chart6;
}
