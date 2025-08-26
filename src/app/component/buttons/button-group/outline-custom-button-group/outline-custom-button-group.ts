import { Component } from '@angular/core';

import { outlineData } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-outline-custom-button-group',
  imports: [],
  templateUrl: './outline-custom-button-group.html',
  styleUrls: ['./outline-custom-button-group.scss'],
})
export class OutlineCustomButtonGroup {
  public outlinebuttonData = outlineData;
}
