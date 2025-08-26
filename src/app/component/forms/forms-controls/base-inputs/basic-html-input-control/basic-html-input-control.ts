import { Component } from '@angular/core';

import { DateTime } from './date-time/date-time';

@Component({
  selector: 'app-basic-html-input-control',
  imports: [DateTime],
  templateUrl: './basic-html-input-control.html',
  styleUrls: ['./basic-html-input-control.scss'],
})
export class BasicHtmlInputControl {}
