import { Component, inject } from '@angular/core';

import { NgbCollapseModule, NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { upcomingCourse } from '../../../../shared/data/component/learning/learning';

@Component({
  selector: 'app-upcoming-cources',
  imports: [NgbCollapseModule, NgbRatingModule],
  templateUrl: './upcoming-cources.html',
  styleUrls: ['./upcoming-cources.scss'],
})
export class UpcomingCources {
  public isCollapsed = false;
  public upcomingCourse = upcomingCourse;

  private config = inject(NgbRatingConfig);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
