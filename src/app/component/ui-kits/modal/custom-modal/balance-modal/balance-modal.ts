import { Component, inject, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-balance-modal',
  imports: [Feathericon, RouterModule],
  templateUrl: './balance-modal.html',
  styleUrls: ['./balance-modal.scss'],
})
export class BalanceModal {
  public modalService = inject(NgbModal);

  BalanceModal(Balancecontant: TemplateRef<NgbModal>) {
    this.modalService.open(Balancecontant, { centered: true });
  }
}
