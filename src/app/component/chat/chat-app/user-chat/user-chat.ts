import { Component, ChangeDetectionStrategy } from '@angular/core';

import { chartUser } from '../../../../shared/data/component/chat/chat';

@Component({
  selector: 'app-user-chat',
  imports: [],
  templateUrl: './user-chat.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./user-chat.scss'],
})
export class UserChat {
  public searchUsers = chartUser;
}
