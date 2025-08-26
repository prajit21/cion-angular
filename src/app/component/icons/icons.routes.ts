import { Routes } from '@angular/router';

import { FeatherIcons } from './feather-icon/feather-icon';
import { FlagIcon } from './flag-icon/flag-icon';
import { FontAwesome } from './font-awesome/font-awesome';
import { IcoIcon } from './ico-icon/ico-icon';
import { ThemifyIcon } from './themify-icon/themify-icon';
import { WeatherIcon } from './weather-icon/weather-icon';

export default [
  {
    path: 'flag-icons',
    component: FlagIcon,
    data: {
      title: 'flag icons',
      breadcrumb: 'flag icons',
    },
  },
  {
    path: 'fontawesome-icon',
    component: FontAwesome,
    data: {
      title: 'Font Awesome Icon',
      breadcrumb: 'Font Awesome Icon',
    },
  },
  {
    path: 'ico-icon',
    component: IcoIcon,
    data: {
      title: 'ICO Icon',
      breadcrumb: 'ICO Icon',
    },
  },
  {
    path: 'feather-icon',
    component: FeatherIcons,
    data: {
      title: 'Feather Icon',
      breadcrumb: 'Feather Icon',
    },
  },
  {
    path: 'themify-icon',
    component: ThemifyIcon,
    data: {
      title: 'Themify Icon',
      breadcrumb: 'Themify Icon',
    },
  },
  {
    path: 'weather-icon',
    component: WeatherIcon,
    data: {
      title: 'Themify Icon',
      breadcrumb: 'Themify Icon',
    },
  },
] as Routes;
