import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category',
  imports: [],
  templateUrl: './add-category.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./add-category.scss'],
})
export class AddCategory {
  public activeModal = inject(NgbActiveModal);
}
