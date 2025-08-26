import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heading-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './heading-dropdown.html',
  styleUrls: ['./heading-dropdown.scss'],
})
export class HeadingDropdown {}
