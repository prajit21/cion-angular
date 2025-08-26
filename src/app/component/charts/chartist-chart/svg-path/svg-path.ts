import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-svg-path',
  imports: [ChartistModule],
  templateUrl: './svg-path.html',
  styleUrls: ['./svg-path.scss'],
})
export class SvgPath {
  public chart2 = chartData.chart2;
}
