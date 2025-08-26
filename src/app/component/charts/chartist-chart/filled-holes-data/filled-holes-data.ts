import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-filled-holes-data',
  imports: [ChartistModule],
  templateUrl: './filled-holes-data.html',
  styleUrls: ['./filled-holes-data.scss'],
})
export class FilledHolesData {
  public chart12 = chartData.chart12;
}
