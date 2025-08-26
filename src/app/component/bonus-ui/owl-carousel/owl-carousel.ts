import { Component } from '@angular/core';

import { AutoHeightExample } from './auto-height-example/auto-height-example';
import { AutoPlayVariant } from './auto-play-variant/auto-play-variant';
import { AutoWidthExample } from './auto-width-example/auto-width-example';
import { CenterExample } from './center-example/center-example';
import { CrossFade } from './cross-fade/cross-fade';
import { LazyLoadExample } from './lazy-load-example/lazy-load-example';
import { MergeExample } from './merge-example/merge-example';
import { MouseWheelVariant } from './mouse-wheel-variant/mouse-wheel-variant';
import { ResponsiveExample } from './responsive-example/responsive-example';
import { RightLeftExample } from './right-left-example/right-left-example';
import { SlidesOnly } from './slides-only/slides-only';
import { StagePaddingExample } from './stage-padding-example/stage-padding-example';
import { UrlHashNavigations } from './url-hash-navigations/url-hash-navigations';

@Component({
  selector: 'app-owl-carousel',
  imports: [
    AutoHeightExample,
    AutoPlayVariant,
    AutoWidthExample,
    CenterExample,
    CrossFade,
    LazyLoadExample,
    MergeExample,
    MouseWheelVariant,
    ResponsiveExample,
    RightLeftExample,
    SlidesOnly,
    StagePaddingExample,
    UrlHashNavigations,
  ],
  templateUrl: './owl-carousel.html',
  styleUrls: ['./owl-carousel.scss'],
})
export class OwlCarousel {}
