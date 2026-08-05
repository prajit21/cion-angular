import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-latest-photos',
  imports: [NgbAccordionModule],
  templateUrl: './latest-photos.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./latest-photos.scss'],
})
export class LatestPhotos {
  public latestPhotosData = data.latestPhotos;
}
