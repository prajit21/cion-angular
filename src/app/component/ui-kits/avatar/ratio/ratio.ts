import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Ratios } from '../../../../shared/data/component/ui-kits/avatar/avavtar';

@Component({
  selector: 'app-ratio',
  imports: [],
  templateUrl: './ratio.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./ratio.scss'],
})
export class Ratio {
  public ratioData = Ratios;
}
