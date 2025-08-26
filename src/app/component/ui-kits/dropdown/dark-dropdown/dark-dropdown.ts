import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dark-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './dark-dropdown.html',
  styleUrls: ['./dark-dropdown.scss'],
})
export class DarkDropdown {}
