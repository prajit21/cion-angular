import { Component } from '@angular/core';

import { TransactionData } from '../../../../../shared/data/component/deshboard/crm-dashboard';

@Component({
  selector: 'app-transaction-history',
  imports: [],
  templateUrl: './transaction-history.html',
  styleUrls: ['./transaction-history.scss'],
})
export class TransactionHistory {
  public transactionHistory = TransactionData;
}
