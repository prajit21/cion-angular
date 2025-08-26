import { Component, inject } from '@angular/core';

import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { questionData } from '../../../shared/data/component/faq/faq';

@Component({
  selector: 'app-questions-faq',
  imports: [NgbAccordionModule, Feathericon],
  templateUrl: './questions-faq.html',
  styleUrls: ['./questions-faq.scss'],
})
export class QuestionsFaq {
  public questionData = questionData;

  private config = inject(NgbAccordionConfig);

  constructor() {
    this.config.closeOthers = true;
  }
}
