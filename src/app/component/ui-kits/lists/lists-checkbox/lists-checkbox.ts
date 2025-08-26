import { Component } from '@angular/core';

import { Listcheckbox } from '../../../..//shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-lists-checkbox',
  imports: [],
  templateUrl: './lists-checkbox.html',
  styleUrls: ['./lists-checkbox.scss'],
})
export class ListsCheckbox {
  public listsCheckboxData = Listcheckbox;
}
