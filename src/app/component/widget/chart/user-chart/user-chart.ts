import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as userschart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-user-chart',
  imports: [NgApexchartsModule],
  templateUrl: './user-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./user-chart.scss'],
})
export class UserChart {
  public userData = userschart.UserChart;
}
