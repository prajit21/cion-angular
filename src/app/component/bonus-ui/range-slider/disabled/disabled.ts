import { Component } from '@angular/core';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-disabled',
  imports: [NgxSliderModule],
  templateUrl: './disabled.html',
  styleUrls: ['./disabled.scss'],
})
export class Disabled {
  value3: number = 550;

  options4: Options = {
    floor: 100,
    ceil: 1000,
    disabled: true,
  };
}
