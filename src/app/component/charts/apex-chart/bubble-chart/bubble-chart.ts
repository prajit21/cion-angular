import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-bubble-chart',
  imports: [NgApexchartsModule],
  templateUrl: './bubble-chart.html',
  styleUrls: ['./bubble-chart.scss'],
})
export class BubbleChart {
  public bubbleChart = chartData.bubbleChart;
}
