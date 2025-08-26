import { Component } from '@angular/core';

import { NumberedBadgeList } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-numbered-badge-lists',
  imports: [],
  templateUrl: './numbered-badge-lists.html',
  styleUrls: ['./numbered-badge-lists.scss'],
})
export class NumberedBadgeLists {
  public NumberedBadgeData = NumberedBadgeList;
}
