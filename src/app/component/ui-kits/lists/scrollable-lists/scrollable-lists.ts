import { Component } from '@angular/core';

import { ScrollableList } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-scrollable-lists',
  imports: [],
  templateUrl: './scrollable-lists.html',
  styleUrls: ['./scrollable-lists.scss'],
})
export class ScrollableLists {
  public scrollableData = ScrollableList;
}
