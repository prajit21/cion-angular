import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { progress } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-common-progressbar',
  imports: [CommonModule],
  templateUrl: './common-progressbar.html',
  styleUrls: ['./common-progressbar.scss'],
})
export class CommonProgressbar {
  readonly data = input.required<progress[]>();
}
