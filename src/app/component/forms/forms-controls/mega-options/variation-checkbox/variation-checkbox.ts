import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  checkBox,
  themeSales,
} from '../../../../../shared/data/component/forms/form-controls/mega-options';

@Component({
  selector: 'app-variation-checkbox',
  imports: [],
  templateUrl: './variation-checkbox.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./variation-checkbox.scss'],
})
export class VariationCheckbox {
  public checkboxData = checkBox;
  public themeData = themeSales;
}
