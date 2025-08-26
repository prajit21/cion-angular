import { Routes } from '@angular/router';

import { FooterDark } from './footer-dark/footer-dark';
import { FooterFixed } from './footer-fixed/footer-fixed';
import { FooterLight } from './footer-light/footer-light';
import { HidenavScroll } from './hidenav-scroll/hidenav-scroll';

export default [
  {
    path: 'hide-nav-scroll',
    component: HidenavScroll,
    data: {
      title: 'Hide Menu On Scrolll',
      breadcrumb: 'Hide Menu On Scrolll',
    },
  },
  {
    path: 'footer-light',
    component: FooterLight,
    data: {
      title: 'Footer-Light',
      breadcrumb: 'Footer-Light',
    },
  },
  {
    path: 'footer-dark',
    component: FooterDark,
    data: {
      title: 'Footer-Dark',
      breadcrumb: 'Footer-Dark',
    },
  },
  {
    path: 'footer-fixed',
    component: FooterFixed,
    data: {
      title: 'Footer-Fixed',
      breadcrumb: 'Footer-Fixed',
    },
  },
] as Routes;
