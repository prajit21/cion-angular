import { Routes } from '@angular/router';

import { ForgetPassword } from './forget-password/forget-password';
import { LoginWithBgImage } from './login-with-bg-image/login-with-bg-image';
import { LoginWithImageTwo } from './login-with-image-two/login-with-image-two';
import { LoginWithSweetalert } from './login-with-sweetalert/login-with-sweetalert';
import { LoginWithTooltip } from './login-with-tooltip/login-with-tooltip';
import { LoginWithValidation } from './login-with-validation/login-with-validation';
import { Maintenance } from './maintenance/maintenance';
import { RegisterSimple } from './register-simple/register-simple';
import { RegisterWithBgImage } from './register-with-bg-image/register-with-bg-image';
import { RegisterWithImageTwo } from './register-with-image-two/register-with-image-two';
import { ResetPassword } from './reset-password/reset-password';
import { SimpleLogin } from './simple-login/simple-login';
import { UnlockUser } from './unlock-user/unlock-user';

export default [
  {
    path: 'simple',
    component: SimpleLogin,
  },
  {
    path: 'image-one',
    component: LoginWithBgImage,
  },
  {
    path: 'image-two',
    component: LoginWithImageTwo,
  },
  {
    path: 'validation',
    component: LoginWithValidation,
  },
  {
    path: 'tooltip',
    component: LoginWithTooltip,
  },
  {
    path: 'login-sweetalert',
    component: LoginWithSweetalert,
  },
  {
    path: 'register-simple',
    component: RegisterSimple,
  },
  {
    path: 'register-image-one',
    component: RegisterWithBgImage,
  },
  {
    path: 'register-image-two',
    component: RegisterWithImageTwo,
  },
  {
    path: 'unlock-user',
    component: UnlockUser,
  },
  {
    path: 'forgot-password',
    component: ForgetPassword,
  },
  {
    path: 'reset-password',
    component: ResetPassword,
  },
  {
    path: 'maintenance',
    component: Maintenance,
  },
] as Routes;
