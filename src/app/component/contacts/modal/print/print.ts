import { Component, inject, TemplateRef, viewChild } from '@angular/core';

import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../shared/data/component/contacts/all-contact';

@Component({
  selector: 'app-print',
  imports: [],
  providers: [NgbActiveModal],
  templateUrl: './print.html',
  styleUrls: ['./print.scss'],
})
export class Print {
  public closeResult!: string;
  public modalOpen: boolean = false;

  public printData!: data.lastDataList;

  public activeModal = inject(NgbActiveModal);
  private modalService = inject(NgbModal);
  constructor() {}

  readonly printModal = viewChild.required<TemplateRef<data.lastDataList>>('printModal');

  async openModal(data: data.lastDataList) {
    this.printData = data;
    this.modalOpen = true;
    this.modalService
      .open(this.printModal(), {
        ariaLabelledBy: 'Confirmation-Modal',
        centered: true,
        windowClass: 'modal-md modal-dialog-centered',
      })
      .result.then(
        result => {
          `Result ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
