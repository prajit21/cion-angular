import { Component, inject, TemplateRef, viewChild } from '@angular/core';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  Allbookmark,
  bookmarkDataInterface,
} from '../../../../shared/data/component/bookmark/bookmarks';

@Component({
  selector: 'app-edit-bookmark',
  imports: [],
  templateUrl: './edit-bookmark.html',
  styleUrls: ['./edit-bookmark.scss'],
})
export class EditBookmark {
  show() {
    throw new Error('Method not implemented.');
  }

  public closeResult: string;
  public modalOpen: boolean = false;

  public bookmarkDetails: bookmarkDataInterface[];

  readonly editBookmarkModal = viewChild<TemplateRef<Allbookmark>>('editBookmarkModal');

  private modalService = inject(NgbModal);

  async openModal(data: bookmarkDataInterface[]) {
    this.bookmarkDetails = data;
    this.modalOpen = true;

    this.modalService
      .open(this.editBookmarkModal(), {
        ariaLabelledBy: 'EditBookmark-Modal',
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
}
