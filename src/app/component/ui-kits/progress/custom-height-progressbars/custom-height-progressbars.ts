import { Component, ChangeDetectionStrategy } from '@angular/core';

import { customheightprogress } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-custom-height-progressbars',
  templateUrl: './custom-height-progressbars.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./custom-height-progressbars.scss'],
})
export class CustomHeightProgressbars {
  public customheightData = customheightprogress;
}
