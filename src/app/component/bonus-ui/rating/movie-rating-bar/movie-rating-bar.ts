import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-movie-rating-bar',
  imports: [BarRatingModule],
  templateUrl: './movie-rating-bar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./movie-rating-bar.scss'],
})
export class MovieRatingBar {
  public movieRate = 2;
}
