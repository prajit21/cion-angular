import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-donut-svg-animate',
  imports: [ChartistModule],
  templateUrl: './donut-svg-animate.html',
  styleUrls: ['./donut-svg-animate.scss'],
})
export class DonutSvgAnimate {
  public chart3 = chartData.chart3;
}
