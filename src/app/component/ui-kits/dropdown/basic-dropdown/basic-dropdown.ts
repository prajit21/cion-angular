import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { basicDropdown } from '../../../../shared/data/component/ui-kits/dropdown/dropdown';

@Component({
  selector: 'app-basic-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './basic-dropdown.html',
  styleUrls: ['./basic-dropdown.scss'],
})
export class BasicDropdown {
  public basicdropdownData = basicDropdown;
}
