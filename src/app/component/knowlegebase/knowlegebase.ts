import { Component } from '@angular/core';

import { BottomDataKnowlegebase } from './bottom-data-knowlegebase/bottom-data-knowlegebase';
import { BrowseArticlesCategory } from './browse-articles-category/browse-articles-category';
import { TopDataKnowlegebase } from './top-data-knowlegebase/top-data-knowlegebase';

@Component({
  selector: 'app-knowlegebase',
  imports: [TopDataKnowlegebase, BrowseArticlesCategory, BottomDataKnowlegebase],
  templateUrl: './knowlegebase.html',
  styleUrls: ['./knowlegebase.scss'],
})
export class Knowlegebase {}
