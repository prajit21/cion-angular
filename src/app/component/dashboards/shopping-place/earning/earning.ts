import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as eraning from '../../../../shared/data/component/deshboard/charts';
import { Earnings } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-earning',
  imports: [NgApexchartsModule],
  templateUrl: './earning.html',
  styleUrls: ['./earning.scss'],
})
export class Earning {
  public erningdata = Earnings;
  public erningchart = eraning.EarningData;
}
