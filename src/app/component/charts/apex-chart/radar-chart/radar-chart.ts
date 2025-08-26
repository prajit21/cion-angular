import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-radar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './radar-chart.html',
  styleUrls: ['./radar-chart.scss'],
})
export class RadarChart {
  public radarChart = chartData.radarChart;
}
