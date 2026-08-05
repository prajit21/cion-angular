import { Component, ChangeDetectionStrategy } from '@angular/core';

import { EmailApp } from '../email-app/email-app';

@Component({
  selector: 'app-email-compose',
  imports: [EmailApp],
  templateUrl: './email-compose.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./email-compose.scss'],
})
export class EmailCompose {}
