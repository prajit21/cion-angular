import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-movie-rating-bar',
  imports: [BarRatingModule],
  templateUrl: './movie-rating-bar.html',
  styleUrls: ['./movie-rating-bar.scss'],
})
export class MovieRatingBar {
  public movieRate = 2;
}
