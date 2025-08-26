import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-star-rating-bar',
  imports: [BarRatingModule],
  templateUrl: './star-rating-bar.html',
  styleUrls: ['./star-rating-bar.scss'],
})
export class StarRatingBar {
  public cssRate = 1;
}
