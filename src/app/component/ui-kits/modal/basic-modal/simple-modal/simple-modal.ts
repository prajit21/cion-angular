import { Component, inject, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-simple-modal',
  imports: [Feathericon],
  templateUrl: './simple-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./simple-modal.scss'],
})
export class SimpleModal {
  public modalService = inject(NgbModal);

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    this.modalService.open(simpleContent);
  }
}
