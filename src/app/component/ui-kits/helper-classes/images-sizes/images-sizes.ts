import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ImageSize } from '../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-images-sizes',
  imports: [],
  templateUrl: './images-sizes.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./images-sizes.scss'],
})
export class ImagesSizes {
  public ImagSizeData = ImageSize;
}
