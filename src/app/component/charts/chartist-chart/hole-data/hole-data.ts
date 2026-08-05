import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-hole-data',
  imports: [ChartistModule],
  templateUrl: './hole-data.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./hole-data.scss'],
})
export class HoleData {
  public chart11 = chartData.chart11;
}
