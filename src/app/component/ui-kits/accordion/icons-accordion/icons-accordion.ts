import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { IconsAccordions } from '../../../../shared/data/component/ui-kits/accordion/accordion';

@Component({
  selector: 'app-icons-accordion',
  imports: [Feathericon, NgbAccordionModule],
  templateUrl: './icons-accordion.html',
  styleUrls: ['./icons-accordion.scss'],
})
export class IconsAccordion {
  public iconaccordionData = IconsAccordions;
}
