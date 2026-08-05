import { Component, ChangeDetectionStrategy } from '@angular/core';

import { EmailSidebar } from './email-sidebar/email-sidebar';

@Component({
  selector: 'app-email-app',
  imports: [EmailSidebar],
  templateUrl: './email-app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./email-app.scss'],
})
export class EmailApp {}
