import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  commonImg,
  urlNavigationsOptions,
} from '../../../../shared/data/component/bonus-ui/owl-carousel/owl-carousel';

@Component({
  selector: 'app-url-hash-navigations',
  imports: [CarouselModule],
  templateUrl: './url-hash-navigations.html',
  styleUrls: ['./url-hash-navigations.scss'],
})
export class UrlHashNavigations {
  public navigationsData = commonImg;
  public urlnavigationsoptionsData = urlNavigationsOptions;
}
