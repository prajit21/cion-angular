import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-line-chart-area',
  imports: [ChartistModule],
  templateUrl: './line-chart-area.html',
  styleUrls: ['./line-chart-area.scss'],
})
export class LineChartArea {
  public chart5 = chartData.chart5;
}
