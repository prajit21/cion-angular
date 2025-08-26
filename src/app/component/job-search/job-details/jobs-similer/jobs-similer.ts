import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { jobCardsData } from '../../../../shared/data/component/job-search/job-search';

@Component({
  selector: 'app-jobs-similer',
  imports: [NgbRatingModule, CommonModule],
  templateUrl: './jobs-similer.html',
  styleUrls: ['./jobs-similer.scss'],
})
export class JobsSimiler {
  public jobCardsData = jobCardsData;

  private config = inject(NgbRatingConfig);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
