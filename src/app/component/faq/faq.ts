import { Component } from '@angular/core';

import { FeaturedTutorials } from './featured-tutorials/featured-tutorials';
import { LatestArticlesVideos } from './latest-articles-videos/latest-articles-videos';
import { Navigation } from './navigation/navigation';
import { QuestionsFaq } from './questions-faq/questions-faq';
import { SearchArticles } from './search-articles/search-articles';
import { TopCommonFaq } from './top-common-faq/top-common-faq';
import { UpdateLatest } from './update-latest/update-latest';
import {
  FaqTopPartData,
  articlesAndVideosData,
  featuredTutorialData,
} from '../../shared/data/component/faq/faq';

@Component({
  selector: 'app-faq',
  imports: [
    TopCommonFaq,
    QuestionsFaq,
    SearchArticles,
    Navigation,
    UpdateLatest,
    FeaturedTutorials,
    LatestArticlesVideos,
  ],
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss'],
})
export class Faq {
  public FaqTop = FaqTopPartData;
  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;
}
