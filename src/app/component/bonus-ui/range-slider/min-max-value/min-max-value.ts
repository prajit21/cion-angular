import { Component } from '@angular/core';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-min-max-value',
  imports: [NgxSliderModule],
  templateUrl: './min-max-value.html',
  styleUrls: ['./min-max-value.scss'],
})
export class MinMaxValue {
  value2: number = 550;
  maxvalue: number = 100;

  options: Options = {
    floor: 100,
    ceil: 1000,
  };
}
