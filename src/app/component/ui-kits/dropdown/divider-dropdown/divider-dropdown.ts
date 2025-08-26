import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DividerDropdowns } from '../../../../shared/data/component/ui-kits/dropdown/dropdown';

@Component({
  selector: 'app-divider-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './divider-dropdown.html',
  styleUrls: ['./divider-dropdown.scss'],
})
export class DividerDropdown {
  public dividerdropdownData = DividerDropdowns;
}
