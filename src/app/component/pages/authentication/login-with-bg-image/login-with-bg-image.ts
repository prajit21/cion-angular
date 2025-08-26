import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-with-bg-image',
  imports: [RouterModule, CommonLoginForm],
  templateUrl: './login-with-bg-image.html',
  styleUrls: ['./login-with-bg-image.scss'],
})
export class LoginWithBgImage {}
