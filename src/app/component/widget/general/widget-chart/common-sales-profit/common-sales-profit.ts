import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';
import { RadialChartOptions } from '../../../../../shared/interface/widgets/chart';

@Component({
  selector: 'app-common-sales-profit',
  imports: [NgApexchartsModule, Feathericon],
  templateUrl: './common-sales-profit.html',
  styleUrls: ['./common-sales-profit.scss'],
})
export class CommonSalesProfit {
  readonly data = input<RadialChartOptions>();
}
