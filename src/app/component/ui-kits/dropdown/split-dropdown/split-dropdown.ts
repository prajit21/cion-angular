import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { SplitDropdowns } from '../../../../shared/data/component/ui-kits/dropdown/dropdown';

@Component({
  selector: 'app-split-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './split-dropdown.html',
  styleUrls: ['./split-dropdown.scss'],
})
export class SplitDropdown {
  public spiltdropdownData = SplitDropdowns;
}
