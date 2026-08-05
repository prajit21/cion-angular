import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TransactionHistory } from './transaction-history/transaction-history';

@Component({
  selector: 'app-update-card',
  imports: [TransactionHistory, RouterModule],
  templateUrl: './update-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./update-card.scss'],
})
export class UpdateCard {}
