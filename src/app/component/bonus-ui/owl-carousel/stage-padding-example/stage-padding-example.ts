import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  stagepaddingOptions,
  commonImg,
} from '../../../../shared/data/component/bonus-ui/owl-carousel/owl-carousel';

@Component({
  selector: 'app-stage-padding-example',
  imports: [CarouselModule],
  templateUrl: './stage-padding-example.html',
  styleUrls: ['./stage-padding-example.scss'],
})
export class StagePaddingExample {
  public stagepaddingData = commonImg;
  public stagepaddingOptionsData = stagepaddingOptions;
}
