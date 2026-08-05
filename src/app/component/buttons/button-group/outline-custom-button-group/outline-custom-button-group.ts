import { Component, ChangeDetectionStrategy } from '@angular/core';

import { outlineData } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-outline-custom-button-group',
  imports: [],
  templateUrl: './outline-custom-button-group.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./outline-custom-button-group.scss'],
})
export class OutlineCustomButtonGroup {
  public outlinebuttonData = outlineData;
}
