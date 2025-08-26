import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-extra-large-modal',
  imports: [Feathericon],
  templateUrl: './extra-large-modal.html',
  styleUrls: ['./extra-large-modal.scss'],
})
export class ExtraLargeModal {
  public modalService = inject(NgbModal);

  ExtraLargemodal(ExtralargeContent: TemplateRef<NgbModal>) {
    this.modalService.open(ExtralargeContent, { size: 'xl' });
  }
}
