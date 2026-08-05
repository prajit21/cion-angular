import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LightboxModule } from 'ng-gallery/lightbox';

import * as Data from '../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-images',
  imports: [LightboxModule],
  templateUrl: './images.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./images.scss'],
})
export class Images {
  public photosData = Data.photosData;
}
