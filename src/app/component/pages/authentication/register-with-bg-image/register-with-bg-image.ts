import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonRegisterForm } from '../common-register-form/common-register-form';

@Component({
  selector: 'app-register-with-bg-image',
  imports: [RouterModule, CommonRegisterForm],
  templateUrl: './register-with-bg-image.html',
  styleUrls: ['./register-with-bg-image.scss'],
})
export class RegisterWithBgImage {}
