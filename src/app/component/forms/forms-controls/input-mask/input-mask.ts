import { Component } from '@angular/core';

import { DateFormat } from './date-format/date-format';
import { DefaultInputMask } from './default-input-mask/default-input-mask';
import { TimeFormat } from './time-format/time-format';

@Component({
  selector: 'app-input-mask',
  imports: [DateFormat, TimeFormat, DefaultInputMask],
  templateUrl: './input-mask.html',
  styleUrls: ['./input-mask.scss'],
})
export class InputMask {}
