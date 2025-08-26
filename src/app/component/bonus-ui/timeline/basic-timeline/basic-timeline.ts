import { Component } from '@angular/core';

import { basicTimeline } from '../../../../shared/data/component/bonus-ui/timeline/timeline';

@Component({
  selector: 'app-basic-timeline',
  imports: [],
  templateUrl: './basic-timeline.html',
  styleUrls: ['./basic-timeline.scss'],
})
export class BasicTimeline {
  public basictimelineData = basicTimeline;
}
