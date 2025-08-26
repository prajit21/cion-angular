import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';
import { ModalData } from '../../../../../shared/data/component/ui-kits/modal/modal';

@Component({
  selector: 'app-scrolling-content',
  imports: [CommonModule, Feathericon],
  templateUrl: './scrolling-content.html',
  styleUrls: ['./scrolling-content.scss'],
})
export class ScrollingContent {
  public scrollData = ModalData;

  public modalService = inject(NgbModal);

  scrollingModal(scrollingContent: TemplateRef<NgbModal>) {
    this.modalService.open(scrollingContent);
  }
}
