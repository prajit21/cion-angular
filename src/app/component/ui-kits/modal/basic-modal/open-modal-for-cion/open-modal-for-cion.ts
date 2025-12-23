
import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-open-modal-for-cion',
  templateUrl: './open-modal-for-cion.html',
  styleUrls: ['./open-modal-for-cion.scss'],
})
export class OpenModalForCion {
  public validate = false;

  public modalService = inject(NgbModal);

  public submit() {
    this.validate = !this.validate;
    this.validate = true;
  }

  OpenModal(openmodal: TemplateRef<NgbModal>) {
    this.modalService.open(openmodal);
  }
}
