import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-pie-chart4',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './pie-chart4.html',
  styleUrls: ['./pie-chart4.scss'],
})
export class PieChart4 {
  public pieChart4 = chartData.pieChart4;
}
