import { Routes } from '@angular/router';

import { Contacts } from './contacts';

export default [
  {
    path: '',
    component: Contacts,
    data: {
      title: 'Contacts',
      breadcrumb: 'Contacts',
    },
  },
] as Routes;
