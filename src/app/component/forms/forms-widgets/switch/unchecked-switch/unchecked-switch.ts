import { Component } from '@angular/core';

import { UncheckedSwitches } from '../../../../../shared/data/component/forms/forms-widgets/switch';

@Component({
  selector: 'app-unchecked-switch',
  imports: [],
  templateUrl: './unchecked-switch.html',
  styleUrls: ['./unchecked-switch.scss'],
})
export class UncheckedSwitch {
  public unchakedData = UncheckedSwitches;
}
