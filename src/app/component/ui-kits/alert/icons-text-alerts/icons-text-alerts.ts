import { Component, ChangeDetectionStrategy } from '@angular/core';

import * as data from '../../../../shared/data/component/ui-kits/alert/alert';

@Component({
  selector: 'app-icons-text-alerts',
  imports: [],
  templateUrl: './icons-text-alerts.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./icons-text-alerts.scss'],
})
export class IconsTextAlerts {
  public icontextData = data.IconandTextAlert;

  close(icontextitem: data.Icons) {
    this.icontextData.splice(this.icontextData.indexOf(icontextitem), 1);
  }
}
