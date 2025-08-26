import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-large-modal',
  imports: [Feathericon],
  templateUrl: './large-modal.html',
  styleUrls: ['./large-modal.scss'],
})
export class LargeModal {
  public modalService = inject(NgbModal);

  LargeModal(largeContent: TemplateRef<NgbModal>) {
    this.modalService.open(largeContent, { size: 'lg' });
  }
}
