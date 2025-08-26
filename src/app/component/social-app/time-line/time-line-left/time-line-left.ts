import { Component } from '@angular/core';

import { ActivityFeed } from './activity-feed/activity-feed';
import { MutualFriends } from './mutual-friends/mutual-friends';
import { MyProfile } from './my-profile/my-profile';

@Component({
  selector: 'app-time-line-left',
  imports: [MutualFriends, MyProfile, ActivityFeed],
  templateUrl: './time-line-left.html',
  styleUrls: ['./time-line-left.scss'],
})
export class TimeLineLeft {}
