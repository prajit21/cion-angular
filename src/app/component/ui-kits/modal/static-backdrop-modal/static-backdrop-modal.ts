import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-static-backdrop-modal',
  imports: [],
  templateUrl: './static-backdrop-modal.html',
  styleUrls: ['./static-backdrop-modal.scss'],
})
export class StaticBackdropModal {
  public modalService = inject(NgbModal);

  StaticBackdropModal(StaticBackdropContent: TemplateRef<NgbModal>) {
    this.modalService.open(StaticBackdropContent, { centered: true });
  }
}
