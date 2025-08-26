import { Component } from '@angular/core';

import { CustomValues } from './custom-values/custom-values';
import { DefaultRangeSlider } from './default-range-slider/default-range-slider';
import { Disabled } from './disabled/disabled';
import { MinMaxValue } from './min-max-value/min-max-value';
import { PrettifyNumbers } from './prettify-numbers/prettify-numbers';

@Component({
  selector: 'app-range-slider',
  imports: [DefaultRangeSlider, MinMaxValue, CustomValues, PrettifyNumbers, Disabled],
  templateUrl: './range-slider.html',
  styleUrls: ['./range-slider.scss'],
})
export class RangeSlider {}
