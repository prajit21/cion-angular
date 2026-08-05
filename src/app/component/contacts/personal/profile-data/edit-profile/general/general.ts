import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import * as data from '../../../../../../shared/data/component/contacts/all-contact';

@Component({
  selector: 'app-general',
  imports: [],
  templateUrl: './general.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./general.scss'],
})
export class General {
  readonly lastData = input<data.lastDataList>();
}
