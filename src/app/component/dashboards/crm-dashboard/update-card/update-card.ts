import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TransactionHistory } from './transaction-history/transaction-history';

@Component({
  selector: 'app-update-card',
  imports: [TransactionHistory, RouterModule],
  templateUrl: './update-card.html',
  styleUrls: ['./update-card.scss'],
})
export class UpdateCard {}
