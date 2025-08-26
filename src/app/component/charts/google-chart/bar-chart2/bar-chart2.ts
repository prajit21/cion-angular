import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-bar-chart2',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './bar-chart2.html',
  styleUrls: ['./bar-chart2.scss'],
})
export class BarChart2 {
  public barChart2 = chartData.barChart2;
}
