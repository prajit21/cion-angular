import { Component } from '@angular/core';

import { commonAnalyics } from '../../../../../shared/data/component/deshboard/crm-dashboard';

@Component({
  selector: 'app-common-analyics',
  imports: [],
  templateUrl: './common-analyics.html',
  styleUrls: ['./common-analyics.scss'],
})
export class CommonAnalyics {
  public commonAnalyicsData = commonAnalyics;
}
