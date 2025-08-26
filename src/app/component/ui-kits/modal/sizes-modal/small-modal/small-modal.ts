import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-small-modal',
  imports: [Feathericon],
  templateUrl: './small-modal.html',
  styleUrls: ['./small-modal.scss'],
})
export class SmallModal {
  public modalService = inject(NgbModal);

  SmallModal(smallContent: TemplateRef<NgbModal>) {
    this.modalService.open(smallContent, { size: 'sm' });
  }
}
