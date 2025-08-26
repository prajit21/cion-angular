import { Component } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { TranslucentToast } from '../../../../shared/data/component/bonus-ui/toasts/toasts';

@Component({
  selector: 'app-translucent-toasts',
  imports: [Feathericon],
  templateUrl: './translucent-toasts.html',
  styleUrls: ['./translucent-toasts.scss'],
})
export class TranslucentToasts {
  public TranslucentToastsData = TranslucentToast;

  close(value: number) {
    const items = this.TranslucentToastsData.filter(v => v.id == value);
    items[0].data = false;
  }
}
