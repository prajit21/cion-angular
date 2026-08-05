import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dark-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './dark-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./dark-dropdown.scss'],
})
export class DarkDropdown {}
