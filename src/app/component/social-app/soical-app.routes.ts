import { Routes } from '@angular/router';

import { SoicalApp } from './soical-app';

export default [
  {
    path: '',
    component: SoicalApp,
    data: {
      title: 'Soical App',
      breadcrumb: 'Soical App',
    },
  },
] as Routes;
