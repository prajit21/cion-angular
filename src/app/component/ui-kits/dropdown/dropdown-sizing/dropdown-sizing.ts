import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DropdownSizings } from '../../../../shared/data/component/ui-kits/dropdown/dropdown';

@Component({
  selector: 'app-dropdown-sizing',
  imports: [NgbDropdownModule],
  templateUrl: './dropdown-sizing.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./dropdown-sizing.scss'],
})
export class DropdownSizing {
  public sizingdropdownData = DropdownSizings;
}
