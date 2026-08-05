import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {
  commonImg,
  margeOption,
} from '../../../../shared/data/component/bonus-ui/owl-carousel/owl-carousel';

@Component({
  selector: 'app-merge-example',
  imports: [CarouselModule],
  templateUrl: './merge-example.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./merge-example.scss'],
})
export class MergeExample {
  public margeData = commonImg;
  public margeOptionsData = margeOption;
}
