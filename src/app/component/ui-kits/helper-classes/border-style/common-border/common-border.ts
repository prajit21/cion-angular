import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { titleData } from '../../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-common-border',
  imports: [],
  templateUrl: './common-border.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./common-border.scss'],
})
export class CommonBorder {
  readonly data = input.required<titleData[]>();
}
