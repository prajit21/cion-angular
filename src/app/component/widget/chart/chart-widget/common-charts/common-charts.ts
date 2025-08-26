import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TotalChartOptions } from '../../../../../shared/interface/widgets/chart';

@Component({
  selector: 'app-common-charts',
  imports: [NgApexchartsModule],
  templateUrl: './common-charts.html',
  styleUrls: ['./common-charts.scss'],
})
export class CommonCharts {
  readonly data = input<TotalChartOptions | undefined>();
}
