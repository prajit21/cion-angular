import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { simpleAccordion } from '../../../../shared/data/component/ui-kits/accordion/accordion';

@Component({
  selector: 'app-simple-accordion',
  imports: [Feathericon, NgbAccordionModule],
  templateUrl: './simple-accordion.html',
  styleUrls: ['./simple-accordion.scss'],
})
export class SimpleAccordion {
  public simpleAccordionData = simpleAccordion;
}
