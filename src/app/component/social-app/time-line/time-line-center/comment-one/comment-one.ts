import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';
import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-comment-one',
  imports: [Feathericon, NgClass],
  templateUrl: './comment-one.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./comment-one.scss'],
})
export class CommentOne {
  public commentOneData = data.commentTwoData;
}
