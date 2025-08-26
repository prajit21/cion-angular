import { Component, inject, input } from '@angular/core';

import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { featuredTutorial } from '../../../shared/data/component/faq/faq';

@Component({
  selector: 'app-featured-tutorials',
  imports: [NgbRatingModule],
  templateUrl: './featured-tutorials.html',
  styleUrls: ['./featured-tutorials.scss'],
})
export class FeaturedTutorials {
  readonly data = input<featuredTutorial[]>();

  public config = inject(NgbRatingConfig);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
