import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-pie-chart2',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './pie-chart2.html',
  styleUrls: ['./pie-chart2.scss'],
})
export class PieChart2 {
  public pieChart2 = chartData.pieChart2;
}
