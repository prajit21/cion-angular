import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CustomContentList } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-custom-content-lists',
  imports: [],
  templateUrl: './custom-content-lists.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./custom-content-lists.scss'],
})
export class CustomContentLists {
  public customContentData = CustomContentList;
}
