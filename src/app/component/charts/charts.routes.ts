import { Routes } from '@angular/router';

import { ApexChart } from './apex-chart/apex-chart';
import { ChartistChart } from './chartist-chart/chartist-chart';
import { ChartjsChart } from './chartjs-chart/chartjs-chart';
import { GoogleChart } from './google-chart/google-chart';

export default [
  {
    path: 'apex-chart',
    component: ApexChart,
    data: {
      title: 'Apex Chart',
      breadcrumb: 'Apex Chart',
    },
  },
  {
    path: 'google-chart',
    component: GoogleChart,
    data: {
      title: 'Google Chart',
      breadcrumb: 'Google Chart',
    },
  },
  {
    path: 'chatjs-chart',
    component: ChartjsChart,
    data: {
      title: 'Chatjs Chart',
      breadcrumb: 'Chatjs Chart',
    },
  },
  {
    path: 'chartist-chart',
    component: ChartistChart,
    data: {
      title: 'Chartist Chart',
      breadcrumb: 'Chartist Chart',
    },
  },
] as Routes;
