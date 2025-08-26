import { Component } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { knowledgebaseData } from '../../../shared/data/component/knowledgebase/knowledgebase';
import { TopCommonFaq } from '../../faq/top-common-faq/top-common-faq';

@Component({
  selector: 'app-top-data-knowlegebase',
  imports: [Feathericon, TopCommonFaq],
  templateUrl: './top-data-knowlegebase.html',
  styleUrls: ['./top-data-knowlegebase.scss'],
})
export class TopDataKnowlegebase {
  public knowledgebaseData = knowledgebaseData;
}
