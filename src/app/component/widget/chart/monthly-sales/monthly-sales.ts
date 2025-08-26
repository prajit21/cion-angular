import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as monthlysaleschart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-monthly-sales',
  imports: [NgApexchartsModule],
  templateUrl: './monthly-sales.html',
  styleUrls: ['./monthly-sales.scss'],
})
export class MonthlySales {
  public monthlySalesData = monthlysaleschart.monthlySales;
}
