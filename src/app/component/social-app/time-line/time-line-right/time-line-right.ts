import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { Followers } from './followers/followers';
import { Following } from './following/following';
import { FriendsProfile } from './friends-profile/friends-profile';
import { LatestPhotos } from './latest-photos/latest-photos';
import { ProfileIntro } from './profile-intro/profile-intro';

@Component({
  selector: 'app-time-line-right',
  imports: [NgbAccordionModule, ProfileIntro, Followers, Following, LatestPhotos, FriendsProfile],
  templateUrl: './time-line-right.html',
  styleUrls: ['./time-line-right.scss'],
})
export class TimeLineRight {}
