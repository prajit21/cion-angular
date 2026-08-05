import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { RoundedDropdowns } from '../../../../shared/data/component/ui-kits/dropdown/dropdown';

@Component({
  selector: 'app-rounded-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './rounded-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./rounded-dropdown.scss'],
})
export class RoundedDropdown {
  public roundeddropdownData = RoundedDropdowns;
}
