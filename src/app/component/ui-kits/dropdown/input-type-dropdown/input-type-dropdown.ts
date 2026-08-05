import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-type-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './input-type-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./input-type-dropdown.scss'],
})
export class InputTypeDropdown {}
