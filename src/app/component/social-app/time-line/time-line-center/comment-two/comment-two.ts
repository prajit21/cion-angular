import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';
import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-comment-two',
  imports: [CommonModule, Feathericon],
  templateUrl: './comment-two.html',
  styleUrls: ['./comment-two.scss'],
})
export class CommentTwo {
  public commentTwoData = data.commentTwoData;
}
