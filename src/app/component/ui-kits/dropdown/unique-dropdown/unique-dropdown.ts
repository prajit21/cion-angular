import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-unique-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './unique-dropdown.html',
  styleUrls: ['./unique-dropdown.scss'],
})
export class UniqueDropdown {}
