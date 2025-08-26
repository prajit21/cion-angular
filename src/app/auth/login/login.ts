import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { Feathericon } from '../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-login',
  imports: [Feathericon, RouterModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  public show: boolean = false;
  public loginForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['Test@gmail.com', [Validators.required, Validators.email]],
      password: ['test123', Validators.required],
    });
  }

  showPassword() {
    this.show = !this.show;
  }

  // Simple Login
  login() {
    if (
      this.loginForm.value['email'] == 'Test@gmail.com' &&
      this.loginForm.value['password'] == 'test123'
    ) {
      let user = {
        email: 'Test@gmail.com',
        password: 'test123',
        name: 'test user',
      };

      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/dashboard/default']);
    }
  }
}
