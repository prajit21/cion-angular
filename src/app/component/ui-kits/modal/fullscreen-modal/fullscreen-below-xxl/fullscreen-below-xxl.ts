import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-fullscreen-below-xxl',
  imports: [Feathericon],
  templateUrl: './fullscreen-below-xxl.html',
  styleUrls: ['./fullscreen-below-xxl.scss'],
})
export class FullscreenBelowXxl {
  public modalService = inject(NgbModal);

  FullscreenbelowXxlModal(FullscreenbelowXxlContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowXxlContent, { size: 'xxl' });
  }
}
