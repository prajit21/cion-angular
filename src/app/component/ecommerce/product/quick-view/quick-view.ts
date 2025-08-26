import { Component, inject, TemplateRef, viewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Products } from '../../../../shared/model/product.model';

@Component({
  selector: 'app-quick-view',
  imports: [RouterModule],
  templateUrl: './quick-view.html',
  styleUrls: ['./quick-view.scss'],
})
export class QuickView {
  public counter: number = 1;
  public closeResult: string;
  public modalOpen: boolean = false;

  public productDetail: Products;

  readonly productModal = viewChild<TemplateRef<Products>>('productModal');
  public router = inject(Router);
  private modalService = inject(NgbModal);

  constructor() {}
  async openModal(product: Products) {
    this.productDetail = product;
    this.modalOpen = true;
    this.modalService
      .open(this.productModal(), {
        ariaLabelledBy: 'Confirmation-Modal',
        centered: true,
        windowClass: 'modal-lg modal-dialog-centered',
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

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }
}
