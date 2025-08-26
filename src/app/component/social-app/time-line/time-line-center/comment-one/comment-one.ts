import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';
import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-comment-one',
  imports: [CommonModule, Feathericon],
  templateUrl: './comment-one.html',
  styleUrls: ['./comment-one.scss'],
})
export class CommentOne {
  public commentOneData = data.commentTwoData;
}
