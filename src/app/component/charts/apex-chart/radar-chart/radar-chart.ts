import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-radar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './radar-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./radar-chart.scss'],
})
export class RadarChart {
  public radarChart = chartData.radarChart;
}
