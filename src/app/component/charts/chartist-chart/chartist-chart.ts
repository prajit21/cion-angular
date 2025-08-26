import { Component } from '@angular/core';

import { AdvancedSmil } from './advanced-smil/advanced-smil';
import { BiPolarBarChart } from './bi-polar-bar-chart/bi-polar-bar-chart';
import { BiPolarLineChart } from './bi-polar-line-chart/bi-polar-line-chart';
import { DonutSvgAnimate } from './donut-svg-animate/donut-svg-animate';
import { ExtremeResponsiveConfiguration } from './extreme-responsive-configuration/extreme-responsive-configuration';
import { FilledHolesData } from './filled-holes-data/filled-holes-data';
import { HoleData } from './hole-data/hole-data';
import { HorizontalBarChart } from './horizontal-bar-chart/horizontal-bar-chart';
import { LineChartArea } from './line-chart-area/line-chart-area';
import { SimpleLineChart } from './simple-line-chart/simple-line-chart';
import { StackedBarChart } from './stacked-bar-chart/stacked-bar-chart';
import { SvgPath } from './svg-path/svg-path';

@Component({
  selector: 'app-chartist-chart',
  imports: [
    AdvancedSmil,
    SvgPath,
    DonutSvgAnimate,
    BiPolarLineChart,
    LineChartArea,
    BiPolarBarChart,
    StackedBarChart,
    HorizontalBarChart,
    ExtremeResponsiveConfiguration,
    SimpleLineChart,
    HoleData,
    FilledHolesData,
  ],
  templateUrl: './chartist-chart.html',
  styleUrls: ['./chartist-chart.scss'],
})
export class ChartistChart {}
