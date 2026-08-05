import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-one-to-ten-ratingbar',
  imports: [BarRatingModule],
  templateUrl: './one-to-ten-ratingbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./one-to-ten-ratingbar.scss'],
})
export class OneToTenRatingbar {
  public faRate = 7;
}
