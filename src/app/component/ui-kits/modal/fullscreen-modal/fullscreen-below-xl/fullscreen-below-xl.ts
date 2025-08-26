import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-fullscreen-below-xl',
  imports: [Feathericon],
  templateUrl: './fullscreen-below-xl.html',
  styleUrls: ['./fullscreen-below-xl.scss'],
})
export class FullscreenBelowXl {
  public modalService = inject(NgbModal);

  FullscreenbelowXlModal(FullscreenbelowXlContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowXlContent, { size: 'xl' });
  }
}
