import { Component } from '@angular/core';

import { CurrentRatingBar } from './current-rating-bar/current-rating-bar';
import { HorizontalRatingBar } from './horizontal-rating-bar/horizontal-rating-bar';
import { MovieRatingBar } from './movie-rating-bar/movie-rating-bar';
import { OneToTenRatingbar } from './one-to-ten-ratingbar/one-to-ten-ratingbar';
import { SquareRatingBar } from './square-rating-bar/square-rating-bar';
import { StarRatingBar } from './star-rating-bar/star-rating-bar';

@Component({
  selector: 'app-rating',
  imports: [
    CurrentRatingBar,
    HorizontalRatingBar,
    MovieRatingBar,
    OneToTenRatingbar,
    SquareRatingBar,
    StarRatingBar,
  ],
  templateUrl: './rating.html',
  styleUrls: ['./rating.scss'],
})
export class Rating {}
