import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  commonImg,
  autoWidthoption,
} from '../../../../shared/data/component/bonus-ui/owl-carousel/owl-carousel';

@Component({
  selector: 'app-auto-width-example',
  imports: [CarouselModule],
  templateUrl: './auto-width-example.html',
  styleUrls: ['./auto-width-example.scss'],
})
export class AutoWidthExample {
  public widthData = commonImg;
  public autowidhtoptionsData = autoWidthoption;
}
