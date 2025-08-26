import { Routes } from '@angular/router';

import { BasicTables } from './basic-tables/basic-tables';
import { TableComponents } from './table-components/table-components';

export default [
  {
    path: 'basic-tables',
    component: BasicTables,
    data: {
      title: 'Bootstrap Basic Tables',
      breadcrumb: 'Bootstrap Basic Tables',
    },
  },
  {
    path: 'table-components',
    component: TableComponents,
    data: {
      title: 'Table Components',
      breadcrumb: 'Table Components',
    },
  },
] as Routes;
