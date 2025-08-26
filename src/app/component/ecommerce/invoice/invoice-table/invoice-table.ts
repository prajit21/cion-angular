import { Component } from '@angular/core';

import { invoice } from '../../../../shared/data/component/e-commerce/invoice';

@Component({
  selector: 'app-invoice-table',
  imports: [],
  templateUrl: './invoice-table.html',
  styleUrls: ['./invoice-table.scss'],
})
export class InvoiceTable {
  public invoiceData = invoice;
}
