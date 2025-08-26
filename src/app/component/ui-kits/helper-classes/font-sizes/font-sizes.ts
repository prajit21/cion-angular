import { Component } from '@angular/core';

import { FontSize } from '../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-font-sizes',
  imports: [],
  templateUrl: './font-sizes.html',
  styleUrls: ['./font-sizes.scss'],
})
export class FontSizes {
  public fonstSizeData = FontSize;
}
