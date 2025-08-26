import { Component } from '@angular/core';

import { VariationLeftRibbons } from './variation-left-ribbons/variation-left-ribbons';
import { VariationRightRibbons } from './variation-right-ribbons/variation-right-ribbons';

@Component({
  selector: 'app-ribbons',
  imports: [VariationLeftRibbons, VariationRightRibbons],
  templateUrl: './ribbons.html',
  styleUrls: ['./ribbons.scss'],
})
export class Ribbons {}
