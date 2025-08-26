import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/component/charts/charts';

@Component({
  selector: 'app-column2-chart',
  imports: [NgApexchartsModule],
  templateUrl: './column2-chart.html',
  styleUrls: ['./column2-chart.scss'],
})
export class Column2Chart {
  public columnChart2 = chartData.columnChart2;
}
