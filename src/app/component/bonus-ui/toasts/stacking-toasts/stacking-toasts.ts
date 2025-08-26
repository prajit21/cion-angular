import { Component } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { StackingToast } from '../../../../shared/data/component/bonus-ui/toasts/toasts';

@Component({
  selector: 'app-stacking-toasts',
  imports: [Feathericon],
  templateUrl: './stacking-toasts.html',
  styleUrls: ['./stacking-toasts.scss'],
})
export class StackingToasts {
  public stackingData = StackingToast;

  close(value: number) {
    const items = this.stackingData.filter(v => v.id == value);
    items[0].data = false;
  }
}
