import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-pie-chart3',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './pie-chart3.html',
  styleUrls: ['./pie-chart3.scss'],
})
export class PieChart3 {
  public pieChart3 = chartData.pieChart3;
}
