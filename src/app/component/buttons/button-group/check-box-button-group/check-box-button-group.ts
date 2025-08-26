import { Component } from '@angular/core';

import { checkboxData } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-check-box-button-group',
  imports: [],
  templateUrl: './check-box-button-group.html',
  styleUrls: ['./check-box-button-group.scss'],
})
export class CheckBoxButtonGroup {
  public checkBox = checkboxData;
}
