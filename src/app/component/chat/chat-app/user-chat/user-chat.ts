import { Component } from '@angular/core';

import { chartUser } from '../../../../shared/data/component/chat/chat';

@Component({
  selector: 'app-user-chat',
  imports: [],
  templateUrl: './user-chat.html',
  styleUrls: ['./user-chat.scss'],
})
export class UserChat {
  public searchUsers = chartUser;
}
