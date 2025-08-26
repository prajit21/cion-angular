import { Component } from '@angular/core';

import { defaultswitch } from '../../../../../shared/data/component/forms/form-controls/checkbox-radio';

@Component({
  selector: 'app-default-switches',
  imports: [],
  templateUrl: './default-switches.html',
  styleUrls: ['./default-switches.scss'],
})
export class DefaultSwitches {
  public switches = defaultswitch;
}
