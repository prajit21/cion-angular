import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DefaultList } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-default-lists',
  imports: [],
  templateUrl: './default-lists.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./default-lists.scss'],
})
export class DefaultLists {
  public defaultListData = DefaultList;
}
