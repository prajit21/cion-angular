import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LargeProgressbar } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-large-progressbars',
  templateUrl: './large-progressbars.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./large-progressbars.scss'],
})
export class LargeProgressbars {
  public largeProgressData = LargeProgressbar;
}
