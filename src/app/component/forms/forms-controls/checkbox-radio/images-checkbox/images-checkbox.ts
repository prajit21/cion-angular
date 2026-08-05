import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { imageChekbox } from '../../../../../shared/data/component/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-images-checkbox',
  imports: [FormsModule],
  templateUrl: './images-checkbox.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./images-checkbox.scss'],
})
export class ImagesCheckbox {
  public imgcheckboxData = imageChekbox;
}
