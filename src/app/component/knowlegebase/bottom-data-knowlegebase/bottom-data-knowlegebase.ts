import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  articlesAndVideosData,
  featuredTutorialData,
} from '../../../shared/data/component/knowledgebase/knowledgebase';
import { FeaturedTutorials } from '../../faq/featured-tutorials/featured-tutorials';
import { LatestArticlesVideos } from '../../faq/latest-articles-videos/latest-articles-videos';

@Component({
  selector: 'app-bottom-data-knowlegebase',
  imports: [FeaturedTutorials, LatestArticlesVideos],
  templateUrl: './bottom-data-knowlegebase.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./bottom-data-knowlegebase.scss'],
})
export class BottomDataKnowlegebase {
  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;
}
