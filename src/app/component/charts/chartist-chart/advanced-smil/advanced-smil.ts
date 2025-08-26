import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-advanced-smil',
  imports: [ChartistModule],
  templateUrl: './advanced-smil.html',
  styleUrls: ['./advanced-smil.scss'],
})
export class AdvancedSmil {
  public chart1 = chartData.chart1;
}
