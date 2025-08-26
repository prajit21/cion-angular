import { Routes } from '@angular/router';

import { Bookmarks } from './bookmarks';

export default [
  {
    path: '',
    component: Bookmarks,
    data: {
      title: 'Bookmarks',
      breadcrumb: 'Bookmarks',
    },
  },
] as Routes;
