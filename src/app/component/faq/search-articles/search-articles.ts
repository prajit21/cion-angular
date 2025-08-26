import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-search-articles',
  imports: [NgbAccordionModule, Feathericon],
  templateUrl: './search-articles.html',
  styleUrls: ['./search-articles.scss'],
})
export class SearchArticles {}
