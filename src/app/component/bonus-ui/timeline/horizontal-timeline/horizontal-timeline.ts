import { Component } from '@angular/core';

import { horizontalTimeline } from '../../../../shared/data/component/bonus-ui/timeline/timeline';

@Component({
  selector: 'app-horizontal-timeline',
  imports: [],
  templateUrl: './horizontal-timeline.html',
  styleUrls: ['./horizontal-timeline.scss'],
})
export class HorizontalTimeline {
  public horizontalTimelineData = horizontalTimeline;
}
