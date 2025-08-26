import { Component } from '@angular/core';

import { RadarController, RadialLinearScale } from 'chart.js';
import { BaseChartDirective, provideCharts } from 'ng2-charts';

import * as chartData from '../../../../shared/data/component/charts/chartjs';

@Component({
  selector: 'app-radar-graph',
  imports: [BaseChartDirective],
  providers: [provideCharts({ registerables: [RadarController, RadialLinearScale] })],
  templateUrl: './radar-graph.html',
  styleUrls: ['./radar-graph.scss'],
})
export class RadarGraph {
  public radarGraphOptions = chartData.radarGraphOptions;
  public radarGraphLabels = chartData.radarGraphLabels;
  public radarGraphType = chartData.radarGraphType;
  public radarGraphData = chartData.radarGraphData;
}
