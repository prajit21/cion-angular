import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-simple-modal',
  imports: [CommonModule, Feathericon],
  templateUrl: './simple-modal.html',
  styleUrls: ['./simple-modal.scss'],
})
export class SimpleModal {
  public modalService = inject(NgbModal);

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    this.modalService.open(simpleContent);
  }
}
