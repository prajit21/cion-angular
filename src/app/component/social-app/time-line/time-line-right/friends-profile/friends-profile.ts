import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-friends-profile',
  imports: [NgbAccordionModule],
  templateUrl: './friends-profile.html',
  styleUrls: ['./friends-profile.scss'],
})
export class FriendsProfile {
  public friednsData = data.Friends;
}
