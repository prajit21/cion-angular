import { Component } from '@angular/core';

import { FollwersGrowth } from './follwers-growth/follwers-growth';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-total-user',
  imports: [Feathericon, FollwersGrowth],
  templateUrl: './total-user.html',
  styleUrls: ['./total-user.scss'],
})
export class TotalUser {}
