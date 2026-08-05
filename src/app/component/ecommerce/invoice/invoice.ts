import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgxPrintModule } from 'ngx-print';

import { InvoiceTable } from './invoice-table/invoice-table';

@Component({
  selector: 'app-invoice',
  imports: [InvoiceTable, NgxPrintModule],
  templateUrl: './invoice.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./invoice.scss'],
})
export class Invoice {}
