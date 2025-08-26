import { Component } from '@angular/core';

import { imageRadio } from '../../../../../shared/data/component/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-images-radio',
  imports: [],
  templateUrl: './images-radio.html',
  styleUrls: ['./images-radio.scss'],
})
export class ImagesRadio {
  public imgradioData = imageRadio;
}
