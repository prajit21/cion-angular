import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-square-rating-bar',
  imports: [BarRatingModule],
  templateUrl: './square-rating-bar.html',
  styleUrls: ['./square-rating-bar.scss'],
})
export class SquareRatingBar {
  public squareRate = 1;
}
