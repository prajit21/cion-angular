import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import * as data from '../../../../../../shared/data/component/contacts/all-contact';

@Component({
  selector: 'app-address-content',
  imports: [],
  templateUrl: './address-content.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./address-content.scss'],
})
export class AddressContent {
  public editContact: boolean = true;
  readonly lastData = input<data.lastDataList>();
}
