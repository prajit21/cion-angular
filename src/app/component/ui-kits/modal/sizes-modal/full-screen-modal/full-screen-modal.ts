import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-full-screen-modal',
  imports: [Feathericon],
  templateUrl: './full-screen-modal.html',
  styleUrls: ['./full-screen-modal.scss'],
})
export class FullScreenModal {
  public modalService = inject(NgbModal);

  FullScreenModal(fullScreenContent: TemplateRef<NgbModal>) {
    this.modalService.open(fullScreenContent, { fullscreen: true });
  }
}
