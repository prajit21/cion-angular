import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { commonDetails } from '../../../../shared/data/component/widget/general/general';
import * as commonchat from '../../../../shared/data/component/widget/general/general-chats';

@Component({
  selector: 'app-common-data',
  imports: [NgApexchartsModule],
  templateUrl: './common-data.html',
  styleUrls: ['./common-data.scss'],
})
export class CommonData {
  public commonitem = commonDetails;
  public profitcharts = commonchat.DataChart;
  public oderchats = commonchat.OrderDatachart;
}
