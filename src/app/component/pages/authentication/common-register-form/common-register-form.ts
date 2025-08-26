import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-common-register-form',
  imports: [Feathericon, RouterModule],
  templateUrl: './common-register-form.html',
  styleUrls: ['./common-register-form.scss'],
})
export class CommonRegisterForm {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
