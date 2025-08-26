import { Component } from '@angular/core';

import { UserVideoChat } from './user-video-chat/user-video-chat';
import { ChatTab } from '../chat-app/chat-tab/chat-tab';
import { UserChat } from '../chat-app/user-chat/user-chat';

@Component({
  selector: 'app-video-chat',
  imports: [UserChat, UserVideoChat, ChatTab],
  templateUrl: './video-chat.html',
  styleUrls: ['./video-chat.scss'],
})
export class VideoChat {}
