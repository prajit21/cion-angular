import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as saleschart from '../../../../shared/data/component/deshboard/charts';

@Component({
  selector: 'app-sale-product',
  imports: [NgApexchartsModule],
  templateUrl: './sale-product.html',
  styleUrls: ['./sale-product.scss'],
})
export class SaleProduct {
  public salesChartData = saleschart.saleproductchart;
}
