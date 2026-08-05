import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DateTime } from './date-time/date-time';

@Component({
  selector: 'app-basic-html-input-control',
  imports: [DateTime],
  templateUrl: './basic-html-input-control.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./basic-html-input-control.scss'],
})
export class BasicHtmlInputControl {}
