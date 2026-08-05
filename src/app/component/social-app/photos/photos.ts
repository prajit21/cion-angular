import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LightboxModule } from 'ng-gallery/lightbox';

import * as Data from '../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-photos',
  imports: [LightboxModule],
  templateUrl: './photos.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./photos.scss'],
})
export class Photos {
  public photosData = Data.photosData;
}
