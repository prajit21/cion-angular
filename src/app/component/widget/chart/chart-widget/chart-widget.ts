import { Component } from '@angular/core';

import { CommonCharts } from './common-charts/common-charts';
import * as totalItemchart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-chart-widget',
  imports: [CommonCharts],
  templateUrl: './chart-widget.html',
  styleUrls: ['./chart-widget.scss'],
})
export class ChartWidget {
  public totalsalecharts = totalItemchart.TotalSale;
  public totalprojectcharts = totalItemchart.TotalProject;
  public totalproductcharts = totalItemchart.TotalProduct;
}
