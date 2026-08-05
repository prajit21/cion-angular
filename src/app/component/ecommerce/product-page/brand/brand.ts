import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-brand',
  imports: [Feathericon],
  templateUrl: './brand.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./brand.scss'],
})
export class Brand {}
