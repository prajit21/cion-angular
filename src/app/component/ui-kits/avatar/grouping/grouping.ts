import { Component } from '@angular/core';

import { Groupings } from '../../../../shared/data/component/ui-kits/avatar/avavtar';

@Component({
  selector: 'app-grouping',
  imports: [],
  templateUrl: './grouping.html',
  styleUrls: ['./grouping.scss'],
})
export class Grouping {
  public groupingdata = Groupings;
}
