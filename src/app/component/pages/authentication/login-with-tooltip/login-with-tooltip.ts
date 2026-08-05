import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-with-tooltip',
  imports: [RouterModule, CommonLoginForm],
  templateUrl: './login-with-tooltip.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./login-with-tooltip.scss'],
})
export class LoginWithTooltip {}
