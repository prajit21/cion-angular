import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as visitorschat from '../../../../shared/data/component/widget/general/general-chats';

@Component({
  selector: 'app-visitors',
  imports: [NgApexchartsModule],
  templateUrl: './visitors.html',
  styleUrls: ['./visitors.scss'],
})
export class Visitors {
  public vistorsData = visitorschat.Visitorschart;
}
