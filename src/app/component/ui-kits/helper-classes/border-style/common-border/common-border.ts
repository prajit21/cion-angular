import { Component, input } from '@angular/core';

import { titleData } from '../../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-common-border',
  imports: [],
  templateUrl: './common-border.html',
  styleUrls: ['./common-border.scss'],
})
export class CommonBorder {
  readonly data = input.required<titleData[]>();
}
