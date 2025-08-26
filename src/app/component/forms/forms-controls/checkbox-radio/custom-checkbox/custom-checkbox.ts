import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  BorderCheckbox,
  IconsCheckbox,
  FilledCheckbox,
} from '../../../../../shared/data/component/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-custom-checkbox',
  imports: [FormsModule],
  templateUrl: './custom-checkbox.html',
  styleUrls: ['./custom-checkbox.scss'],
})
export class CustomCheckbox {
  public borders = BorderCheckbox;
  public icons = IconsCheckbox;
  public filled = FilledCheckbox;
}
