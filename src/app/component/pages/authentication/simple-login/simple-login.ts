import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-simple-login',
  imports: [RouterModule, CommonLoginForm],
  templateUrl: './simple-login.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./simple-login.scss'],
})
export class SimpleLogin {}
