import { Component } from '@angular/core';

import { CommonSoicalMedia } from './common-soical-media/common-soical-media';
import * as soicalchat from '../../../../shared/data/component/widget/general/general-chats';

@Component({
  selector: 'app-social-media',
  imports: [CommonSoicalMedia],
  templateUrl: './social-media.html',
  styleUrls: ['./social-media.scss'],
})
export class SocialMedia {
  public facbookfollwerChart = soicalchat.FacebookChart;
  public TwitterfollwerChart = soicalchat.TwitterChart;
  public InstagramfollwerChart = soicalchat.InstagramChart;
  public youtubefolwerChart = soicalchat.YoutubeChart;
}
