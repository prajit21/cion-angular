import { Component } from '@angular/core';

import { avatarSize } from '../../../../shared/data/component/ui-kits/avatar/avavtar';

@Component({
  selector: 'app-sizes',
  imports: [],
  templateUrl: './sizes.html',
  styleUrls: ['./sizes.scss'],
})
export class Sizes {
  public SizeData = avatarSize;
}
