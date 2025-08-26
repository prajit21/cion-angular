import { Component } from '@angular/core';

import { Disabledoutlineswitch } from '../../../../../shared/data/component/forms/forms-widgets/switch';

@Component({
  selector: 'app-disabled-outline-switch',
  imports: [],
  templateUrl: './disabled-outline-switch.html',
  styleUrls: ['./disabled-outline-switch.scss'],
})
export class DisabledOutlineSwitch {
  public disableoutline = Disabledoutlineswitch;
}
