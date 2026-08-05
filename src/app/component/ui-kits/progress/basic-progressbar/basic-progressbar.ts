import { Component, ChangeDetectionStrategy } from '@angular/core';

import { basicProgress } from '../../../../shared/data/component/ui-kits/progressbar/progress';
import { CommonProgressbar } from '../common-progressbar/common-progressbar';

@Component({
  selector: 'app-basic-progressbar',
  imports: [CommonProgressbar],
  templateUrl: './basic-progressbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./basic-progressbar.scss'],
})
export class BasicProgressbar {
  public basicData = basicProgress;
}
