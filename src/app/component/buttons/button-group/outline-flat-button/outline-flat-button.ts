import { Component } from '@angular/core';

import { CommonOutline } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-outline-flat-button',
  imports: [],
  templateUrl: './outline-flat-button.html',
  styleUrls: ['./outline-flat-button.scss'],
})
export class OutlineFlatButton {
  public outlinedata = CommonOutline;
}
