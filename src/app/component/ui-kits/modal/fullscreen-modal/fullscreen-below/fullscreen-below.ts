import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';
import { ModalData } from '../../../../../shared/data/component/ui-kits/modal/modal';

@Component({
  selector: 'app-fullscreen-below',
  imports: [Feathericon],
  templateUrl: './fullscreen-below.html',
  styleUrls: ['./fullscreen-below.scss'],
})
export class FullscreenBelow {
  public FullscreenData = ModalData;

  public modalService = inject(NgbModal);

  FullscreenbelowModal(FullscreenbelowContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowContent, { fullscreen: true });
  }
}
