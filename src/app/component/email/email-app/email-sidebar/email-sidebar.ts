import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { EmailUser } from '../email-user/email-user';
import { Inbox } from '../inbox/inbox';
import { NewMail } from '../new-mail/new-mail';

@Component({
  selector: 'app-email-sidebar',
  imports: [CommonModule, EmailUser, NewMail, Inbox],
  templateUrl: './email-sidebar.html',
  styleUrls: ['./email-sidebar.scss'],
})
export class EmailSidebar {
  public active = 2;
  public openTab: string = 'inbox';
  public open: boolean = false;

  constructor() {}

  public tabbed(val: string) {
    this.openTab = val;
  }

  openMenu() {
    this.open = !this.open;
  }
}
