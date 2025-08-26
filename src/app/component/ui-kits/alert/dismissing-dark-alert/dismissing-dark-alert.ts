import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-dismissing-dark-alert',
  imports: [Feathericon, CommonModule],
  templateUrl: './dismissing-dark-alert.html',
  styleUrls: ['./dismissing-dark-alert.scss'],
})
export class DismissingDarkAlert {
  public alerts: boolean = true;

  close() {
    this.alerts = false;
  }
}
