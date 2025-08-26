import { Component } from '@angular/core';

import { ChatTab } from './chat-tab/chat-tab';
import { Chats } from './chats/chats';
import { UserChat } from './user-chat/user-chat';

@Component({
  selector: 'app-chat-app',
  imports: [UserChat, Chats, ChatTab],
  templateUrl: './chat-app.html',
  styleUrls: ['./chat-app.scss'],
})
export class ChatApp {
  public filterValue: boolean;
  receiverFilterValue(value: boolean) {
    this.filterValue = value;
  }
}
