import { Component } from '@angular/core';

import { activityTimeline } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-activity-timeline',
  imports: [],
  templateUrl: './activity-timeline.html',
  styleUrls: ['./activity-timeline.scss'],
})
export class ActivityTimeline {
  public timelineitem = activityTimeline;
}
