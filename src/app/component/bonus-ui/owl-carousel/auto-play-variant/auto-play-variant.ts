import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  autoPlayVariant,
  autovariantOption,
} from '../../../../shared/data/component/bonus-ui/owl-carousel/owl-carousel';

@Component({
  selector: 'app-auto-play-variant',
  imports: [CarouselModule],
  templateUrl: './auto-play-variant.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./auto-play-variant.scss'],
})
export class AutoPlayVariant {
  public autovariantoptionsData = autovariantOption;
  public autoVariantData = autoPlayVariant;
}
