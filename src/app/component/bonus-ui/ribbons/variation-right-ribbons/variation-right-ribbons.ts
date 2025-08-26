import { Component } from '@angular/core';

import { RightRibbons } from '../../../../shared/data/component/bonus-ui/ribbons/ribbons';

@Component({
  selector: 'app-variation-right-ribbons',
  imports: [],
  templateUrl: './variation-right-ribbons.html',
  styleUrls: ['./variation-right-ribbons.scss'],
})
export class VariationRightRibbons {
  public rightRibbonsData = RightRibbons;
}
