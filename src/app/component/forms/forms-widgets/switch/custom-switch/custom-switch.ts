import { Component } from '@angular/core';

import { customSwitch } from '../../../../../shared/data/component/forms/forms-widgets/switch';

@Component({
  selector: 'app-custom-switch',
  imports: [],
  templateUrl: './custom-switch.html',
  styleUrls: ['./custom-switch.scss'],
})
export class CustomSwitch {
  public customData = customSwitch;
}
