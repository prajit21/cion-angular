import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { progress } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-common-progressbar',
  templateUrl: './common-progressbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./common-progressbar.scss'],
})
export class CommonProgressbar {
  readonly data = input.required<progress[]>();
}
