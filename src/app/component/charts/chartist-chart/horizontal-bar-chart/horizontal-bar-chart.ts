import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-horizontal-bar-chart',
  imports: [ChartistModule],
  templateUrl: './horizontal-bar-chart.html',
  styleUrls: ['./horizontal-bar-chart.scss'],
})
export class HorizontalBarChart {
  public chart8 = chartData.chart8;
}
