import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  fadeOptions,
  crossFade,
} from '../../../../shared/data/component/bonus-ui/owl-carousel/owl-carousel';

@Component({
  selector: 'app-cross-fade',
  imports: [CarouselModule],
  templateUrl: './cross-fade.html',
  styleUrls: ['./cross-fade.scss'],
})
export class CrossFade {
  public crossfadeData = crossFade;
  public fadeoptionsData = fadeOptions;
}
