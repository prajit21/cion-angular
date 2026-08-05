import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-dismissing-light-alert',
  imports: [Feathericon, NgClass],
  templateUrl: './dismissing-light-alert.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./dismissing-light-alert.scss'],
})
export class DismissingLightAlert {
  public alerts2: boolean = true;

  close2() {
    this.alerts2 = false;
  }
}
