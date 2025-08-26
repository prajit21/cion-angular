import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar, faStarHalfAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-current-rating-bar',
  imports: [BarRatingModule, FontAwesomeModule],
  templateUrl: './current-rating-bar.html',
  styleUrls: ['./current-rating-bar.scss'],
})
export class CurrentRatingBar {
  public faoRate = 5.6;
  public faoRated = false;

  onFaoRate(e: number) {
    this.faoRated = true;
    this.faoRate = e;
  }
  ctrl = new FormControl<number | null>(null, Validators.required);

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }
  private library = inject(FaIconLibrary);

  constructor() {
    this.library.addIcons(faStar, faStarHalfAlt, farStar, faTimesCircle);
  }
}
