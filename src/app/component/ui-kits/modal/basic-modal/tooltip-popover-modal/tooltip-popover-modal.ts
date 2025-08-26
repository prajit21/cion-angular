import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-popover-modal',
  imports: [],
  templateUrl: './tooltip-popover-modal.html',
  styleUrls: ['./tooltip-popover-modal.scss'],
})
export class TooltipPopoverModal {
  public modalService = inject(NgbModal);

  tooltipModal(tooltipmodalContent: TemplateRef<NgbModal>) {
    this.modalService.open(tooltipmodalContent);
  }
}
