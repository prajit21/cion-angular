import { Component, input } from '@angular/core';

import { titleData } from '../../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-common-border-displays',
  imports: [],
  templateUrl: './common-border-displays.html',
  styleUrls: ['./common-border-displays.scss'],
})
export class CommonBorderDisplays {
  readonly data = input.required<titleData[]>();
}
