import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-update-latest',
  imports: [Feathericon],
  templateUrl: './update-latest.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./update-latest.scss'],
})
export class UpdateLatest {}
