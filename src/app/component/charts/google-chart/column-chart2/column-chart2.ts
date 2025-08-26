import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-column-chart2',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './column-chart2.html',
  styleUrls: ['./column-chart2.scss'],
})
export class ColumnChart2 {
  public columnChart2 = chartData.columnChart2;
}
