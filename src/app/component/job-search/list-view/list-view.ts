import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { jobCardsData } from '../../../shared/data/component/job-search/job-search';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-list-view',
  imports: [JobFilter, NgbRatingModule, CommonModule],
  templateUrl: './list-view.html',
  styleUrls: ['./list-view.scss'],
})
export class ListView {
  public jobCardsData = jobCardsData;
  public rating = 5;

  private config = inject(NgbRatingConfig);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
