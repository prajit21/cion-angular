import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { WidgetChartOptions } from '../../../../../shared/interface/widgets/chart';

@Component({
  selector: 'app-common-chart',
  imports: [NgApexchartsModule],
  templateUrl: './common-chart.html',
  styleUrls: ['./common-chart.scss'],
})
export class CommonChart {
  readonly data = input<WidgetChartOptions>();
}
