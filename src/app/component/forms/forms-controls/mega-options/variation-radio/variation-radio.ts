import { Component } from '@angular/core';

import {
  VariationRadiopayment,
  VariationsWebdesign,
  variationsIcons,
} from '../../../../../shared/data/component/forms/form-controls/mega-options';

@Component({
  selector: 'app-variation-radio',
  imports: [],
  templateUrl: './variation-radio.html',
  styleUrls: ['./variation-radio.scss'],
})
export class VariationRadio {
  public paymentData = VariationRadiopayment;
  public webdesignData = VariationsWebdesign;
  public iconsData = variationsIcons;
}
