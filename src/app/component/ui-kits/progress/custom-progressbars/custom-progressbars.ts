import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CustomProgressbar } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-custom-progressbars',
  templateUrl: './custom-progressbars.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./custom-progressbars.scss'],
})
export class CustomProgressbars {
  public customprogressData = CustomProgressbar;
}
