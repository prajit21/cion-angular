import { Component, ChangeDetectionStrategy } from '@angular/core';

import { activityTimeline } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-activity-timeline',
  imports: [],
  templateUrl: './activity-timeline.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./activity-timeline.scss'],
})
export class ActivityTimeline {
  public timelineitem = activityTimeline;
}
