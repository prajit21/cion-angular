import { Routes } from '@angular/router';

import { CreateNew } from './create-new/create-new';
import { ProjectList } from './project-list/project-list';

export default [
  {
    path: 'project-list',
    component: ProjectList,
    data: {
      title: 'Project List',
      breadcrumb: 'Project List',
    },
  },
  {
    path: 'create-new',
    component: CreateNew,
    data: {
      title: 'Create New',
      breadcrumb: 'Create New',
    },
  },
] as Routes;
