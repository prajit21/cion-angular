import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { jobCardsData } from '../../../shared/data/component/job-search/job-search';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-cards-view',
  imports: [NgbRatingModule, JobFilter],
  templateUrl: './cards-view.html',
  styleUrls: ['./cards-view.scss'],
})
export class CardsView {
  public jobCardsData = jobCardsData;

  private config = inject(NgbRatingConfig);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
