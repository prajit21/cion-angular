import { Component } from '@angular/core';

import { StatusIndicators } from '../../../../shared/data/component/ui-kits/avatar/avavtar';

@Component({
  selector: 'app-status-indicator',
  imports: [],
  templateUrl: './status-indicator.html',
  styleUrls: ['./status-indicator.scss'],
})
export class StatusIndicator {
  public statusindicatorData = StatusIndicators;
}
