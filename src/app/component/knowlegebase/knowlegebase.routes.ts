import { Routes } from '@angular/router';

import { Knowlegebase } from './knowlegebase';

export default [
  {
    path: '',
    component: Knowlegebase,
    data: {
      title: 'Knowledgebase',
      breadcrumb: 'Knowledgebase',
    },
  },
] as Routes;
