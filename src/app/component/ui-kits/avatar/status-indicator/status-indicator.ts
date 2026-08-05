import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StatusIndicators } from '../../../../shared/data/component/ui-kits/avatar/avavtar';

@Component({
  selector: 'app-status-indicator',
  imports: [],
  templateUrl: './status-indicator.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./status-indicator.scss'],
})
export class StatusIndicator {
  public statusindicatorData = StatusIndicators;
}
