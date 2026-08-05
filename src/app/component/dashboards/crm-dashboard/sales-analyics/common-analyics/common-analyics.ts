import { Component, ChangeDetectionStrategy } from '@angular/core';

import { commonAnalyics } from '../../../../../shared/data/component/deshboard/crm-dashboard';

@Component({
  selector: 'app-common-analyics',
  imports: [],
  templateUrl: './common-analyics.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./common-analyics.scss'],
})
export class CommonAnalyics {
  public commonAnalyicsData = commonAnalyics;
}
