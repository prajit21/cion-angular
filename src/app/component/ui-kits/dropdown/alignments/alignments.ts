import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AlignmentsDropdown } from '../../../../shared/data/component/ui-kits/dropdown/dropdown';

@Component({
  selector: 'app-alignments',
  imports: [NgbDropdownModule],
  templateUrl: './alignments.html',
  styleUrls: ['./alignments.scss'],
})
export class Alignments {
  public alignmentsDropdownData = AlignmentsDropdown;
}
