import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as saleschart from '../../../../shared/data/component/deshboard/charts';
import { sales } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-sales',
  imports: [NgApexchartsModule],
  templateUrl: './sales.html',
  styleUrls: ['./sales.scss'],
})
export class Sales {
  public salesData = sales;
  public saleschartData = saleschart.saleschart;
}
