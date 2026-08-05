import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HorizontalList } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-horizontal-lists',
  imports: [],
  templateUrl: './horizontal-lists.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./horizontal-lists.scss'],
})
export class HorizontalLists {
  public horizontalData = HorizontalList;
}
