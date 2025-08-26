import { Component } from '@angular/core';

import { EmailApp } from '../email-app/email-app';

@Component({
  selector: 'app-email-compose',
  imports: [EmailApp],
  templateUrl: './email-compose.html',
  styleUrls: ['./email-compose.scss'],
})
export class EmailCompose {}
