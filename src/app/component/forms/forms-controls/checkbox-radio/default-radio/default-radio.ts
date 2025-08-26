import { Component } from '@angular/core';

import { defaultRedio } from '../../../../../shared/data/component/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-default-radio',
  imports: [],
  templateUrl: './default-radio.html',
  styleUrls: ['./default-radio.scss'],
})
export class DefaultRadio {
  public redio = defaultRedio;
}
