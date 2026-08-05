import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-with-image-two',
  imports: [RouterModule, CommonLoginForm],
  templateUrl: './login-with-image-two.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./login-with-image-two.scss'],
})
export class LoginWithImageTwo {}
