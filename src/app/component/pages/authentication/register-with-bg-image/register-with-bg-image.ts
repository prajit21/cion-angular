import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonRegisterForm } from '../common-register-form/common-register-form';

@Component({
  selector: 'app-register-with-bg-image',
  imports: [RouterModule, CommonRegisterForm],
  templateUrl: './register-with-bg-image.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./register-with-bg-image.scss'],
})
export class RegisterWithBgImage {}
