import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category',
  imports: [],
  templateUrl: './add-category.html',
  styleUrls: ['./add-category.scss'],
})
export class AddCategory {
  public activeModal = inject(NgbActiveModal);
}
