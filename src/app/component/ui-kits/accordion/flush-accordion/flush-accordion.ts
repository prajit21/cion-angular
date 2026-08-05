import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { FlushAccordions } from '../../../../shared/data/component/ui-kits/accordion/accordion';

@Component({
  selector: 'app-flush-accordion',
  imports: [NgbAccordionModule],
  templateUrl: './flush-accordion.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./flush-accordion.scss'],
})
export class FlushAccordion {
  public flushAccordionData = FlushAccordions;
}
