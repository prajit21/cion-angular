import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { RoundedDropdowns } from '../../../../shared/data/component/ui-kits/dropdown/dropdown';

@Component({
  selector: 'app-rounded-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './rounded-dropdown.html',
  styleUrls: ['./rounded-dropdown.scss'],
})
export class RoundedDropdown {
  public roundeddropdownData = RoundedDropdowns;
}
