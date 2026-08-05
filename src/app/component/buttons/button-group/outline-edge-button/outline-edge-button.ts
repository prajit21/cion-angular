import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CommonOutline } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-outline-edge-button',
  imports: [],
  templateUrl: './outline-edge-button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./outline-edge-button.scss'],
})
export class OutlineEdgeButton {
  public outlinedata = CommonOutline;
}
