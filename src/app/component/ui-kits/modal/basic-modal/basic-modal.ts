import { Component } from '@angular/core';

import { OpenModalForCion } from './open-modal-for-cion/open-modal-for-cion';
import { ScrollingContent } from './scrolling-content/scrolling-content';
import { SimpleModal } from './simple-modal/simple-modal';
import { TooltipPopoverModal } from './tooltip-popover-modal/tooltip-popover-modal';

@Component({
  selector: 'app-basic-modal',
  imports: [SimpleModal, ScrollingContent, TooltipPopoverModal, OpenModalForCion],
  templateUrl: './basic-modal.html',
  styleUrls: ['./basic-modal.scss'],
})
export class BasicModal {}
