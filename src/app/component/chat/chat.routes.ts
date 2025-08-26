import { Routes } from '@angular/router';

import { ChatApp } from './chat-app/chat-app';
import { VideoChat } from './video-chat/video-chat';

export default [
  {
    path: 'chat-app',
    component: ChatApp,
    data: {
      title: 'Chat App',
      breadcrumb: 'Chat App',
    },
  },
  {
    path: 'video-chat',
    component: VideoChat,
    data: {
      title: 'VideoChat',
      breadcrumb: 'VideoChat',
    },
  },
] as Routes;
