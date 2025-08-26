import { Component } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { browseArticlesData } from '../../../shared/data/component/knowledgebase/knowledgebase';

@Component({
  selector: 'app-browse-articles-category',
  imports: [Feathericon],
  templateUrl: './browse-articles-category.html',
  styleUrls: ['./browse-articles-category.scss'],
})
export class BrowseArticlesCategory {
  public browseArticlesData = browseArticlesData;
}
