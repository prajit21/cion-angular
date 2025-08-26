import { Component } from '@angular/core';

import {
  ProgressBarsAnimated,
  ProgressBarsStriped,
} from '../../../../shared/data/component/ui-kits/progressbar/progress';
import { CommonProgressbar } from '../common-progressbar/common-progressbar';

@Component({
  selector: 'app-striped-animated-progress',
  imports: [CommonProgressbar],
  templateUrl: './striped-animated-progress.html',
  styleUrls: ['./striped-animated-progress.scss'],
})
export class StripedAnimatedProgress {
  public progressStripedData = ProgressBarsStriped;
  public progressAnimatedData = ProgressBarsAnimated;
}
