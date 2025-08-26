import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as follwesgrowthchat from '../../../../../shared/data/component/widget/general/general-chats';

@Component({
  selector: 'app-follwers-growth',
  imports: [NgApexchartsModule],
  templateUrl: './follwers-growth.html',
  styleUrls: ['./follwers-growth.scss'],
})
export class FollwersGrowth {
  public follwergrowth = follwesgrowthchat.follwerschart;
}
