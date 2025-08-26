import { Routes } from '@angular/router';

export const fullRoutes: Routes = [
  {
    path: 'error-page',
    loadChildren: () => import('../../component/pages/error-pages/error-pages.routes'),
  },
  {
    path: 'authentication',
    loadChildren: () => import('../../component/pages/authentication/authentication.routes'),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('../../component/pages/coming-soon/coming-soon.routes'),
  },
];
