import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-simple-line-chart',
  imports: [ChartistModule],
  templateUrl: './simple-line-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./simple-line-chart.scss'],
})
export class SimpleLineChart {
  public chart10 = chartData.chart10;
}
