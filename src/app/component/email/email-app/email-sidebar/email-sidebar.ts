import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { EmailUser } from '../email-user/email-user';
import { Inbox } from '../inbox/inbox';
import { NewMail } from '../new-mail/new-mail';

@Component({
  selector: 'app-email-sidebar',
  imports: [EmailUser, NewMail, Inbox, NgClass],
  templateUrl: './email-sidebar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
