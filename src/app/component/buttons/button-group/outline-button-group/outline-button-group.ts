import { Component } from '@angular/core';

import { CommonOutline } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-outline-button-group',
  imports: [],
  templateUrl: './outline-button-group.html',
  styleUrls: ['./outline-button-group.scss'],
})
export class OutlineButtonGroup {
  public outlinedata = CommonOutline;
}
