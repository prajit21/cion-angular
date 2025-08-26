import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-fullscreen-below-sm',
  imports: [Feathericon],
  templateUrl: './fullscreen-below-sm.html',
  styleUrls: ['./fullscreen-below-sm.scss'],
})
export class FullscreenBelowSm {
  public modalService = inject(NgbModal);

  FullscreenbelowSmModal(FullscreenbelowSmContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowSmContent, { size: 'sm' });
  }
}
