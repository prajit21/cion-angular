import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-stepline-chart',
  imports: [NgApexchartsModule],
  templateUrl: './stepline-chart.html',
  styleUrls: ['./stepline-chart.scss'],
})
export class SteplineChart {
  public steplineChart = chartData.steplineChart;
}
