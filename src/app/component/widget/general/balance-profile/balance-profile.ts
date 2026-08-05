import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-balance-profile',
  imports: [Feathericon, RouterModule],
  templateUrl: './balance-profile.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./balance-profile.scss'],
})
export class BalanceProfile {}
