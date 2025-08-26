import { Component } from '@angular/core';

import { iconsiwtchSizing } from '../../../../../shared/data/component/forms/forms-widgets/switch';

@Component({
  selector: 'app-switch-icons',
  imports: [],
  templateUrl: './switch-icons.html',
  styleUrls: ['./switch-icons.scss'],
})
export class SwitchIcons {
  public iconsizeingData = iconsiwtchSizing;
}
