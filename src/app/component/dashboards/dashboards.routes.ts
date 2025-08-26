import { Routes } from '@angular/router';

import { CrmDashboard } from './crm-dashboard/crm-dashboard';
import { ShoppingPlace } from './shopping-place/shopping-place';

export default [
  {
    path: 'default',
    component: ShoppingPlace,
    data: {
      title: 'Shopping Place Dashboard',
      breadcrumb: 'Default',
    },
  },
  {
    path: 'crm-dashboard',
    component: CrmDashboard,
    data: {
      title: 'CRM-Dashboard',
      breadcrumb: 'CRM-Dashboard',
    },
  },
] as Routes;
