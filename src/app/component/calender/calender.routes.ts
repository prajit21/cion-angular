import { Routes } from '@angular/router';

import { Calender } from './calender';

export default [
  {
    path: '',
    component: Calender,
    data: {
      title: 'Canlender',
      breadcrumb: 'Canlender',
    },
  },
] as Routes;
