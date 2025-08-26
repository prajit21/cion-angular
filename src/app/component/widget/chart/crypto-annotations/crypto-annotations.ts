import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as cryptoannotationchart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-crypto-annotations',
  imports: [NgApexchartsModule],
  templateUrl: './crypto-annotations.html',
  styleUrls: ['./crypto-annotations.scss'],
})
export class CryptoAnnotations {
  public cryptoData = cryptoannotationchart.cryptochart;
}
