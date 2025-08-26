import { Component } from '@angular/core';

import { CommonChart } from './common-chart/common-chart';
import { CommonSalesProfit } from './common-sales-profit/common-sales-profit';
import * as widgetchat from '../../../../shared/data/component/widget/general/general-chats';

@Component({
  selector: 'app-widget-chart',
  imports: [CommonChart, CommonSalesProfit],
  templateUrl: './widget-chart.html',
  styleUrls: ['./widget-chart.scss'],
})
export class WidgetChart {
  public bitcoinchat = widgetchat.bitcoinChart;
  public Ethereumchat = widgetchat.ethereumChart;
  public LeaveTravel = widgetchat.leavetravelChart;
  public AverageSaleschat = widgetchat.AverageSalesPerDayChart;
  public Averageprofitchat = widgetchat.AverageProfitPerDayChart;
}
