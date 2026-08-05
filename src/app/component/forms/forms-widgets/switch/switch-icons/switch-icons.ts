import { Component, ChangeDetectionStrategy } from '@angular/core';

import { iconsiwtchSizing } from '../../../../../shared/data/component/forms/forms-widgets/switch';

@Component({
  selector: 'app-switch-icons',
  imports: [],
  templateUrl: './switch-icons.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./switch-icons.scss'],
})
export class SwitchIcons {
  public iconsizeingData = iconsiwtchSizing;
}
