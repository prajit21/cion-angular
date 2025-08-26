import { Routes } from '@angular/router';

import { Login } from './auth/login/login';
import { Content } from './shared/component/layout/content/content';
import { Full } from './shared/component/layout/full/full';
import { AdminGuard } from './shared/guard/admin.guard';
import { fullRoutes } from './shared/routes/full-routes';
import { content } from './shared/routes/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/default',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    component: Login,
  },
  {
    path: '',
    component: Content,
    canActivate: [AdminGuard],
    children: content,
  },
  {
    path: '',
    component: Full,
    children: fullRoutes,
  },
  {
    path: '**',
    redirectTo: '/error-page/error404',
  },
];
