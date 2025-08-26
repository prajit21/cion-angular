import { Component, input } from '@angular/core';

import { titleData } from '../../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-common-background',
  imports: [],
  templateUrl: './common-background.html',
  styleUrls: ['./common-background.scss'],
})
export class CommonBackground {
  readonly data = input.required<titleData[]>();
}
