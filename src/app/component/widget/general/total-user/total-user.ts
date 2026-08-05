import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FollwersGrowth } from './follwers-growth/follwers-growth';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-total-user',
  imports: [Feathericon, FollwersGrowth],
  templateUrl: './total-user.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./total-user.scss'],
})
export class TotalUser {}
