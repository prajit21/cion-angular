import { Component } from '@angular/core';

import { LightboxModule } from 'ng-gallery/lightbox';

import * as Data from '../../../shared/data/component/gallery/hover';

@Component({
  selector: 'app-hover-effects',
  imports: [LightboxModule],
  templateUrl: './hover-effects.html',
  styleUrls: ['./hover-effects.scss'],
})
export class HoverEffects {
  public imgData = Data.imgData;
  public hoverData = Data.hoverData;
}
