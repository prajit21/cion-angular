import { Component } from '@angular/core';

import { DefaultList } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-default-lists',
  imports: [],
  templateUrl: './default-lists.html',
  styleUrls: ['./default-lists.scss'],
})
export class DefaultLists {
  public defaultListData = DefaultList;
}
