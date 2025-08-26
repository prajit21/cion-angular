import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as trunoverchart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-trun-over',
  imports: [NgApexchartsModule],
  templateUrl: './trun-over.html',
  styleUrls: ['./trun-over.scss'],
})
export class TrunOver {
  public turnoverData = trunoverchart.TrunOverchat;
}
