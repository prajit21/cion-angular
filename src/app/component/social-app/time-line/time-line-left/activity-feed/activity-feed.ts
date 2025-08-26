import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-activity-feed',
  imports: [NgbAccordionModule],
  templateUrl: './activity-feed.html',
  styleUrls: ['./activity-feed.scss'],
})
export class ActivityFeed {
  public isCollapsed = false;

  public activityFeedData = data.activityFeedData;
}
