import { Component, input } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { articlesAndVideos } from '../../../shared/data/component/faq/faq';

@Component({
  selector: 'app-latest-articles-videos',
  imports: [Feathericon],
  templateUrl: './latest-articles-videos.html',
  styleUrls: ['./latest-articles-videos.scss'],
})
export class LatestArticlesVideos {
  readonly data = input<articlesAndVideos[]>();
}
