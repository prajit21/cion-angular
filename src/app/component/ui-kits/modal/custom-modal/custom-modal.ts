import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BalanceModal } from './balance-modal/balance-modal';
import { ProfileModal } from './profile-modal/profile-modal';
import { ResultModal } from './result-modal/result-modal';

@Component({
  selector: 'app-custom-modal',
  imports: [ProfileModal, ResultModal, BalanceModal],
  templateUrl: './custom-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./custom-modal.scss'],
})
export class CustomModal {}
