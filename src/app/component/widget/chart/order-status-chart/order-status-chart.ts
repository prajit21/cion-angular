import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as orderchart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-order-status-chart',
  imports: [NgApexchartsModule],
  templateUrl: './order-status-chart.html',
  styleUrls: ['./order-status-chart.scss'],
})
export class OrderStatusChart {
  public orderStatusData = orderchart.orderStatuschart;
}
