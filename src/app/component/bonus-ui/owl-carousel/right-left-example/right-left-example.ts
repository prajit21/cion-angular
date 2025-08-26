import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  commonImg,
  RightToLeftoptions,
} from '../../../../shared/data/component/bonus-ui/owl-carousel/owl-carousel';

@Component({
  selector: 'app-right-left-example',
  imports: [CarouselModule],
  templateUrl: './right-left-example.html',
  styleUrls: ['./right-left-example.scss'],
})
export class RightLeftExample {
  public rightLeftData = commonImg;
  public rightleftoptions = RightToLeftoptions;
}
