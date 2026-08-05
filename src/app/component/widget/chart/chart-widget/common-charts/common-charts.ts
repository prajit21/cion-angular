import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { TotalChartOptions } from '../../../../../shared/interface/widgets/chart';

@Component({
  selector: 'app-common-charts',
  imports: [NgApexchartsModule],
  templateUrl: './common-charts.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./common-charts.scss'],
})
export class CommonCharts {
  readonly data = input<TotalChartOptions | undefined>();
}
