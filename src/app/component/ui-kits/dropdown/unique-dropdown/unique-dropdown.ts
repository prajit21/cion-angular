import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-unique-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './unique-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./unique-dropdown.scss'],
})
export class UniqueDropdown {}
