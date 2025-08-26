import { Component } from '@angular/core';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-prettify-numbers',
  imports: [NgxSliderModule],
  templateUrl: './prettify-numbers.html',
  styleUrls: ['./prettify-numbers.scss'],
})
export class PrettifyNumbers {
  value3: number = 2000;

  options3: Options = {
    floor: 1000,
    ceil: 10000,
    showTicksValues: true,
    tickStep: 3000,
    tickValueStep: 100,
  };
}
