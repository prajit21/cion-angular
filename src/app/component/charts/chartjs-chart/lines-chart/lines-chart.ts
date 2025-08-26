import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as chartData from '../../../../shared/data/component/charts/chartjs';

@Component({
  selector: 'app-lines-chart',
  imports: [BaseChartDirective],
  templateUrl: './lines-chart.html',
  styleUrls: ['./lines-chart.scss'],
})
export class LinesChart {
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;
}
