import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-simple-login',
  imports: [RouterModule, CommonLoginForm],
  templateUrl: './simple-login.html',
  styleUrls: ['./simple-login.scss'],
})
export class SimpleLogin {}
