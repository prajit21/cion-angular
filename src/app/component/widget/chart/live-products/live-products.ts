import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Liveproductchart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-live-products',
  imports: [NgApexchartsModule],
  templateUrl: './live-products.html',
  styleUrls: ['./live-products.scss'],
})
export class LiveProducts {
  public liveproductData = Liveproductchart.liveproducts;
}
