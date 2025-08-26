import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/component/email/email-app';

@Component({
  selector: 'app-email-user',
  imports: [],
  templateUrl: './email-user.html',
  styleUrls: ['./email-user.scss'],
})
export class EmailUser {
  public userData = Data.Users;

  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}
