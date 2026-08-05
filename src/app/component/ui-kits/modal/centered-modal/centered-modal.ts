import { Component, inject, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-centered-modal',
  imports: [],
  templateUrl: './centered-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./centered-modal.scss'],
})
export class CenteredModal {
  public modalService = inject(NgbModal);

  CenteredModal(CenteredContent: TemplateRef<NgbModal>) {
    this.modalService.open(CenteredContent, { centered: true });
  }
}
