import { Component } from '@angular/core';

import { BasicTimeline } from './basic-timeline/basic-timeline';
import { HorizontalTimeline } from './horizontal-timeline/horizontal-timeline';
import { HoveringTimeline } from './hovering-timeline/hovering-timeline';
import { TimelineChart } from './timeline-chart/timeline-chart';
import { VariationTimeline } from './variation-timeline/variation-timeline';

@Component({
  selector: 'app-timeline',
  imports: [BasicTimeline, HoveringTimeline, VariationTimeline, HorizontalTimeline, TimelineChart],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss'],
})
export class Timeline {}
