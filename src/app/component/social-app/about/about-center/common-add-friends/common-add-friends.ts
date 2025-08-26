import { Component, input } from '@angular/core';

import { addFriends } from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-common-add-friends',
  imports: [],
  templateUrl: './common-add-friends.html',
  styleUrls: ['./common-add-friends.scss'],
})
export class CommonAddFriends {
  readonly data = input<addFriends>();
}
