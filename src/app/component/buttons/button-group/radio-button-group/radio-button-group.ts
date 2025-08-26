import { Component } from '@angular/core';

import { radioButton } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-radio-button-group',
  imports: [],
  templateUrl: './radio-button-group.html',
  styleUrls: ['./radio-button-group.scss'],
})
export class RadioButtonGroup {
  public radiobuttonData = radioButton;
}
