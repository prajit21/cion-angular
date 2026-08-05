import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SmallProgressbar } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-small-progressbars',
  templateUrl: './small-progressbars.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./small-progressbars.scss'],
})
export class SmallProgressbars {
  public smallProgressData = SmallProgressbar;
}
