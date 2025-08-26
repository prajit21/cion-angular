import { Component } from '@angular/core';

import { ActivityLog } from './activity-log/activity-log';
import { CommonAddFriends } from './common-add-friends/common-add-friends';
import { HobbiesEducation } from './hobbies-education/hobbies-education';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import * as data from '../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-about-center',
  imports: [CommonAddFriends, Feathericon, HobbiesEducation, ActivityLog],
  templateUrl: './about-center.html',
  styleUrls: ['./about-center.scss'],
})
export class AboutCenter {
  public addFriendsData = data.peopleKnowYouData;
  public hobbiesAndInterestData = data.hobbiedAndInterestData;
  public eductionData = data.eductionData;
}
