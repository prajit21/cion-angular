import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { OutlineAccordions } from '../../../../shared/data/component/ui-kits/accordion/accordion';

@Component({
  selector: 'app-outline-accordion',
  imports: [Feathericon, NgbAccordionModule],
  templateUrl: './outline-accordion.html',
  styleUrls: ['./outline-accordion.scss'],
})
export class OutlineAccordion {
  public OutlineAccordionData = OutlineAccordions;
}
