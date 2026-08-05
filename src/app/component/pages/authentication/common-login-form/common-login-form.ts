import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-common-login-form',
  imports: [Feathericon, RouterModule],
  templateUrl: './common-login-form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./common-login-form.scss'],
})
export class CommonLoginForm {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
