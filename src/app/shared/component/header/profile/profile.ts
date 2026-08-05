import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Feathericon } from '../../feathericon/feathericon';

@Component({
  selector: 'app-profile',
  imports: [RouterModule, Feathericon],
  templateUrl: './profile.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./profile.scss'],
})
export class Profile {
  private router = inject(Router);

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
