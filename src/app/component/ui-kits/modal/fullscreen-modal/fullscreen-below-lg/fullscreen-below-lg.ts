import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-fullscreen-below-lg',
  imports: [Feathericon],
  templateUrl: './fullscreen-below-lg.html',
  styleUrls: ['./fullscreen-below-lg.scss'],
})
export class FullscreenBelowLg {
  public modalService = inject(NgbModal);

  FullscreenbelowLgModal(FullscreenbelowLgContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowLgContent, { size: 'lg' });
  }
}
