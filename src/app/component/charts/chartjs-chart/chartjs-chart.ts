import { Component } from '@angular/core';

import { BarsChart } from './bars-chart/bars-chart';
import { DoughnutChart } from './doughnut-chart/doughnut-chart';
import { LineGraph } from './line-graph/line-graph';
import { LinesChart } from './lines-chart/lines-chart';
import { PolarChart } from './polar-chart/polar-chart';
import { RadarGraph } from './radar-graph/radar-graph';

@Component({
  selector: 'app-chartjs-chart',
  imports: [BarsChart, LineGraph, RadarGraph, LinesChart, DoughnutChart, PolarChart],
  templateUrl: './chartjs-chart.html',
  styleUrls: ['./chartjs-chart.scss'],
})
export class ChartjsChart {}
