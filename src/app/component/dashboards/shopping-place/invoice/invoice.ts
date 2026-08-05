import { Component, ChangeDetectionStrategy } from '@angular/core';

import { invoiceData } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-invoice',
  imports: [],
  templateUrl: './invoice.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./invoice.scss'],
})
export class Invoice {
  public invoice = invoiceData;
}
