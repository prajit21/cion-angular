import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonRegisterForm } from '../common-register-form/common-register-form';

@Component({
  selector: 'app-register-with-image-two',
  imports: [RouterModule, CommonRegisterForm],
  templateUrl: './register-with-image-two.html',
  styleUrls: ['./register-with-image-two.scss'],
})
export class RegisterWithImageTwo {}
