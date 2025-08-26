import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as incomcharts from '../../../../shared/data/component/deshboard/charts';
import { vistors } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-visitors',
  imports: [NgApexchartsModule],
  templateUrl: './visitors.html',
  styleUrls: ['./visitors.scss'],
})
export class Visitors {
  public visitorData = vistors;
  public incomechartData = incomcharts.incomechart;
}
