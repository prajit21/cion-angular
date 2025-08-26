import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-pie-chart1',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './pie-chart1.html',
  styleUrls: ['./pie-chart1.scss'],
})
export class PieChart1 {
  public pieChart1 = chartData.pieChart1;
}
