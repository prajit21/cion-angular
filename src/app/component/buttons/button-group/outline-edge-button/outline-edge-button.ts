import { Component } from '@angular/core';

import { CommonOutline } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-outline-edge-button',
  imports: [],
  templateUrl: './outline-edge-button.html',
  styleUrls: ['./outline-edge-button.scss'],
})
export class OutlineEdgeButton {
  public outlinedata = CommonOutline;
}
