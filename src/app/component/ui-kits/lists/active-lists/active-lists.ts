import { Component } from '@angular/core';

import { activeLists } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-active-lists',
  imports: [],
  templateUrl: './active-lists.html',
  styleUrls: ['./active-lists.scss'],
})
export class ActiveLists {
  public activeData = activeLists;
}
