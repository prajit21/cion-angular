import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-result-modal',
  imports: [],
  templateUrl: './result-modal.html',
  styleUrls: ['./result-modal.scss'],
})
export class ResultModal {
  public modalService = inject(NgbModal);

  ResultModal(resultcontant: TemplateRef<NgbModal>) {
    this.modalService.open(resultcontant, { centered: true });
  }
}
