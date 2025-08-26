import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-mutual-friends',
  imports: [NgbAccordionModule],
  templateUrl: './mutual-friends.html',
  styleUrls: ['./mutual-friends.scss'],
})
export class MutualFriends {
  public isCollapsed = false;

  public mautalFriendsData = data.mutualFriendsData;
}
