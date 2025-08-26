import { Component } from '@angular/core';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';
import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-activity-log',
  imports: [Feathericon],
  templateUrl: './activity-log.html',
  styleUrls: ['./activity-log.scss'],
})
export class ActivityLog {
  public activityLogData = data.activityLog;
}
