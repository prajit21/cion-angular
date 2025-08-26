import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { JustifyContents } from '../../../../shared/data/component/ui-kits/dropdown/dropdown';

@Component({
  selector: 'app-justify-contents-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './justify-contents-dropdown.html',
  styleUrls: ['./justify-contents-dropdown.scss'],
})
export class JustifyContentsDropdown {
  public justifyData = JustifyContents;
}
