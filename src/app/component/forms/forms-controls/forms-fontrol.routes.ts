import { Routes } from '@angular/router';

import { BaseInputs } from './base-inputs/base-inputs';
import { CheckboxRadio } from './checkbox-radio/checkbox-radio';
import { FormValidation } from './form-validation/form-validation';
import { InputGroups } from './input-groups/input-groups';
import { InputMask } from './input-mask/input-mask';
import { MegaOptions } from './mega-options/mega-options';

export default [
  {
    path: 'form-validation',
    component: FormValidation,
    data: {
      title: 'Validation Form',
      breadcrumb: 'Validation Form',
    },
  },
  {
    path: 'base-inputs',
    component: BaseInputs,
    data: {
      title: 'Base Inputs',
      breadcrumb: 'Base Inputs',
    },
  },
  {
    path: 'checkbox-Radio',
    component: CheckboxRadio,
    data: {
      title: 'Checkbox & Radio',
      breadcrumb: 'Checkbox-Radio',
    },
  },
  {
    path: 'input-groups',
    component: InputGroups,
    data: {
      title: 'Input Groups',
      breadcrumb: 'Input Groups',
    },
  },
  {
    path: 'input-mask',
    component: InputMask,
    data: {
      title: 'Input Mask',
      breadcrumb: 'Input Mask',
    },
  },
  {
    path: 'mega-options',
    component: MegaOptions,
    data: {
      title: 'Mega Options',
      breadcrumb: 'Mega Options',
    },
  },
] as Routes;
