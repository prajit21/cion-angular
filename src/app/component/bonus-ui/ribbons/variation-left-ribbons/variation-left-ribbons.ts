import { Component } from '@angular/core';

import { LeftRibbons } from '../../../../shared/data/component/bonus-ui/ribbons/ribbons';

@Component({
  selector: 'app-variation-left-ribbons',
  imports: [],
  templateUrl: './variation-left-ribbons.html',
  styleUrls: ['./variation-left-ribbons.scss'],
})
export class VariationLeftRibbons {
  public leftRibbonsData = LeftRibbons;
}
