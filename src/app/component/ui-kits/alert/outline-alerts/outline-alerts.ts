import { Component } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import * as data from '../../../../shared/data/component/ui-kits/alert/alert';

@Component({
  selector: 'app-outline-alerts',
  imports: [Feathericon],
  templateUrl: './outline-alerts.html',
  styleUrls: ['./outline-alerts.scss'],
})
export class OutlineAlerts {
  public outlinealertData = data.OutlineDarkAlert;

  close(outlineitem: data.Alert) {
    this.outlinealertData.splice(this.outlinealertData.indexOf(outlineitem), 1);
  }
}
