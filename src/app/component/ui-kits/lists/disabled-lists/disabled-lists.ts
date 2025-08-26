import { Component } from '@angular/core';

import { DisabledList } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-disabled-lists',
  imports: [],
  templateUrl: './disabled-lists.html',
  styleUrls: ['./disabled-lists.scss'],
})
export class DisabledLists {
  public disableData = DisabledList;
}
