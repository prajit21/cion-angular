import { Component } from '@angular/core';

import { BalanceProfile } from './balance-profile/balance-profile';
import { CommonData } from './common-data/common-data';
import { Courses } from './courses/courses';
import { Datepicker } from './datepicker/datepicker';
import { SalesPurchase } from './sales-purchase/sales-purchase';
import { SocialMedia } from './social-media/social-media';
import { TotalUser } from './total-user/total-user';
import { Visitors } from './visitors/visitors';
import { WidgetChart } from './widget-chart/widget-chart';

@Component({
  selector: 'app-general',
  imports: [
    WidgetChart,
    SalesPurchase,
    Courses,
    TotalUser,
    Visitors,
    SocialMedia,
    CommonData,
    BalanceProfile,
    Datepicker,
  ],
  templateUrl: './general.html',
  styleUrls: ['./general.scss'],
})
export class General {}
