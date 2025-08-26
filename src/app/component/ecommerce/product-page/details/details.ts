import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-details',
  imports: [BarRatingModule, RouterModule],
  templateUrl: './details.html',
  styleUrls: ['./details.scss'],
})
export class Details {
  public cssRate = 2;
}
