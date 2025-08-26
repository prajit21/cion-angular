import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileTab } from './profile-tab/profile-tab';
import { menuChat } from '../../../../shared/data/component/chat/chat';

@Component({
  selector: 'app-chat-tab',
  imports: [NgbNavModule, ProfileTab],
  templateUrl: './chat-tab.html',
  styleUrls: ['./chat-tab.scss'],
})
export class ChatTab {
  public chatuser = menuChat;

  public active = 1;
}
