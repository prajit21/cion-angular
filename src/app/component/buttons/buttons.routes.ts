import { Routes } from '@angular/router';

import { ButtonGroup } from './button-group/button-group';
import { DefaultStyle } from './default-style/default-style';
import { EdgeStyle } from './edge-style/edge-style';
import { FlatStyle } from './flat-style/flat-style';
import { RaisedStyle } from './raised-style/raised-style';

export default [
  {
    path: 'default-style',
    component: DefaultStyle,
    data: {
      title: 'Default Style',
      breadcrumb: 'Default Style',
    },
  },
  {
    path: 'flat-style',
    component: FlatStyle,
    data: {
      title: 'Flat Style',
      breadcrumb: 'Flat Style',
    },
  },
  {
    path: 'edge-style',
    component: EdgeStyle,
    data: {
      title: 'Edge Style',
      breadcrumb: 'Edge Style',
    },
  },
  {
    path: 'raised-style',
    component: RaisedStyle,
    data: {
      title: 'Raised Buttons',
      breadcrumb: 'Raised Buttons',
    },
  },
  {
    path: 'button-group',
    component: ButtonGroup,
    data: {
      title: 'Button Group',
      breadcrumb: 'Button Group',
    },
  },
] as Routes;
