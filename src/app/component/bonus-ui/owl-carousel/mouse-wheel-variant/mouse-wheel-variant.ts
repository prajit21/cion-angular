import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  autoPlayVariant,
  MouseWheeloption,
} from '../../../../shared/data/component/bonus-ui/owl-carousel/owl-carousel';

@Component({
  selector: 'app-mouse-wheel-variant',
  imports: [CarouselModule],
  templateUrl: './mouse-wheel-variant.html',
  styleUrls: ['./mouse-wheel-variant.scss'],
})
export class MouseWheelVariant {
  public autoVariantData = autoPlayVariant;
  public mousewheelData = MouseWheeloption;
}
