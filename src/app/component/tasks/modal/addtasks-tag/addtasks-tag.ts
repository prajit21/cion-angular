import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addtasks-tag',
  imports: [],
  templateUrl: './addtasks-tag.html',
  styleUrls: ['./addtasks-tag.scss'],
})
export class AddtasksTag {
  public activeModal = inject(NgbActiveModal);
}
