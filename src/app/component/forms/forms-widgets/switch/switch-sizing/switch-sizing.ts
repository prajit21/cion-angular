import { Component, ChangeDetectionStrategy } from '@angular/core';

import { switchSizeing } from '../../../../../shared/data/component/forms/forms-widgets/switch';

@Component({
  selector: 'app-switch-sizing',
  imports: [],
  templateUrl: './switch-sizing.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./switch-sizing.scss'],
})
export class SwitchSizing {
  public sizeingData = switchSizeing;
}
