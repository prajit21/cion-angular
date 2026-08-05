import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as stockMarket from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-stock-market',
  imports: [NgApexchartsModule],
  templateUrl: './stock-market.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./stock-market.scss'],
})
export class StockMarket {
  public stockMarkeData = stockMarket.stockMarketchart;
}
