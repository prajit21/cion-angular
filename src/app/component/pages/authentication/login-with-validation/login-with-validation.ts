import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-with-validation',
  imports: [RouterModule, CommonLoginForm],
  templateUrl: './login-with-validation.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./login-with-validation.scss'],
})
export class LoginWithValidation {}
