import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Cryptochart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-cryptocurrency-prices',
  imports: [NgApexchartsModule],
  templateUrl: './cryptocurrency-prices.html',
  styleUrls: ['./cryptocurrency-prices.scss'],
})
export class CryptocurrencyPrices {
  public crpytopriceschart = Cryptochart.CryptocurrencyPrices;
}
