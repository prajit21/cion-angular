import { Component } from '@angular/core';

import { CollapseAccordion } from './collapse-accordion/collapse-accordion';
import { FlushAccordion } from './flush-accordion/flush-accordion';
import { HorizontalAccordion } from './horizontal-accordion/horizontal-accordion';
import { IconsAccordion } from './icons-accordion/icons-accordion';
import { MultipleCollapseAccordion } from './multiple-collapse-accordion/multiple-collapse-accordion';
import { OutlineAccordion } from './outline-accordion/outline-accordion';
import { SimpleAccordion } from './simple-accordion/simple-accordion';

@Component({
  selector: 'app-accordion',
  imports: [
    SimpleAccordion,
    FlushAccordion,
    MultipleCollapseAccordion,
    IconsAccordion,
    OutlineAccordion,
    HorizontalAccordion,
    CollapseAccordion,
  ],
  templateUrl: './accordion.html',
  styleUrls: ['./accordion.scss'],
})
export class Accordion {}
