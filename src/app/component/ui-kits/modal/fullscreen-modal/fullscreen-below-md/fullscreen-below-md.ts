import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-fullscreen-below-md',
  imports: [Feathericon],
  templateUrl: './fullscreen-below-md.html',
  styleUrls: ['./fullscreen-below-md.scss'],
})
export class FullscreenBelowMd {
  public modalService = inject(NgbModal);

  FullscreenbelowMdModal(FullscreenbelowMdContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowMdContent, { size: 'md' });
  }
}
