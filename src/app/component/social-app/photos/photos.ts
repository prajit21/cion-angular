import { Component } from '@angular/core';

import { LightboxModule } from 'ng-gallery/lightbox';

import * as Data from '../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-photos',
  imports: [LightboxModule],
  templateUrl: './photos.html',
  styleUrls: ['./photos.scss'],
})
export class Photos {
  public photosData = Data.photosData;
}
