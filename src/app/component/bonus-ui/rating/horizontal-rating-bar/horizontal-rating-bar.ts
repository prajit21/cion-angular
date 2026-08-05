import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-horizontal-rating-bar',
  imports: [BarRatingModule],
  templateUrl: './horizontal-rating-bar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./horizontal-rating-bar.scss'],
})
export class HorizontalRatingBar {
  public verticalRate = 1;
}
