import { Component } from '@angular/core';

import { CommentOne } from './comment-one/comment-one';
import { CommentTwo } from './comment-two/comment-two';

@Component({
  selector: 'app-time-line-center',
  imports: [CommentOne, CommentTwo],
  templateUrl: './time-line-center.html',
  styleUrls: ['./time-line-center.scss'],
})
export class TimeLineCenter {}
