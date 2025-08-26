import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-candlestick-chart',
  imports: [NgApexchartsModule],
  templateUrl: './candlestick-chart.html',
  styleUrls: ['./candlestick-chart.scss'],
})
export class CandlestickChart {
  public candlestickChart = chartData.candlestickChart;
}
