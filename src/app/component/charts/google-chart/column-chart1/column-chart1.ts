import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-column-chart1',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './column-chart1.html',
  styleUrls: ['./column-chart1.scss'],
})
export class ColumnChart1 {
  public columnChart1 = chartData.columnChart1;
}
