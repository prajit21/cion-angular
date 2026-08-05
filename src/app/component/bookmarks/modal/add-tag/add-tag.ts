import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-tag',
  imports: [],
  templateUrl: './add-tag.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./add-tag.scss'],
})
export class AddTag {
  public activeModal = inject(NgbActiveModal);
}
