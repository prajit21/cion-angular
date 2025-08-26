import { Routes } from '@angular/router';

import { Apply } from './apply/apply';
import { CardsView } from './cards-view/cards-view';
import { JobDetails } from './job-details/job-details';
import { ListView } from './list-view/list-view';

export default [
  {
    path: 'cards-view',
    component: CardsView,
    data: {
      title: 'Cards View',
      breadcrumb: 'Cards View',
    },
  },
  {
    path: 'list-view',
    component: ListView,
    data: {
      title: 'List View',
      breadcrumb: 'List View',
    },
  },
  {
    path: 'job-details',
    component: JobDetails,
    data: {
      title: 'Job Details',
      breadcrumb: 'Job Details',
    },
  },
  {
    path: 'apply',
    component: Apply,
    data: {
      title: 'Apply',
      breadcrumb: 'Apply',
    },
  },
] as Routes;
