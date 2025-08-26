import { Component } from '@angular/core';

import { FlushList } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-flush-lists',
  imports: [],
  templateUrl: './flush-lists.html',
  styleUrls: ['./flush-lists.scss'],
})
export class FlushLists {
  public flushListData = FlushList;
}
