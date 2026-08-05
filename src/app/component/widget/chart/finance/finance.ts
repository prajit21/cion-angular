import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as financeschart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-finance',
  imports: [NgApexchartsModule],
  templateUrl: './finance.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./finance.scss'],
})
export class Finance {
  public financesData = financeschart.Financeschart;
}
