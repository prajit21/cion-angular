import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  sildesOnly,
  sildesOptions,
} from '../../../../shared/data/component/bonus-ui/owl-carousel/owl-carousel';

@Component({
  selector: 'app-slides-only',
  imports: [CarouselModule],
  templateUrl: './slides-only.html',
  styleUrls: ['./slides-only.scss'],
})
export class SlidesOnly {
  public sildesData = sildesOnly;
  public slidesopdtionData = sildesOptions;
}
