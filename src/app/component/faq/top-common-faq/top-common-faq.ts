import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { faqTopPart } from '../../../shared/data/component/faq/faq';

@Component({
  selector: 'app-top-common-faq',
  imports: [Feathericon],
  templateUrl: './top-common-faq.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./top-common-faq.scss'],
})
export class TopCommonFaq {
  readonly data = input<faqTopPart[]>();
}
