import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-with-sweetalert',
  imports: [RouterModule, CommonLoginForm],
  templateUrl: './login-with-sweetalert.html',
  styleUrls: ['./login-with-sweetalert.scss'],
})
export class LoginWithSweetalert {}
