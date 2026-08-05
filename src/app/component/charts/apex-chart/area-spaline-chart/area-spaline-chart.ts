import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-area-spaline-chart',
  imports: [NgApexchartsModule],
  templateUrl: './area-spaline-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./area-spaline-chart.scss'],
})
export class AreaSpalineChart {
  public areaSpalineChart = chartData.areaSpalineChart;
}
