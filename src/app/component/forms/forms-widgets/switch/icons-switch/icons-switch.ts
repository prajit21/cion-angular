import { Component } from '@angular/core';

import { IconSwitch } from '../../../../../shared/data/component/forms/forms-widgets/switch';

@Component({
  selector: 'app-icons-switch',
  imports: [],
  templateUrl: './icons-switch.html',
  styleUrls: ['./icons-switch.scss'],
})
export class IconsSwitch {
  public iconsData = IconSwitch;
}
