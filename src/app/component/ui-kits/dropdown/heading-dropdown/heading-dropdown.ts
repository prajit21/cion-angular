import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heading-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './heading-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./heading-dropdown.scss'],
})
export class HeadingDropdown {}
