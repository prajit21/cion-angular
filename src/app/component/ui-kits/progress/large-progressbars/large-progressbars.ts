
import { Component } from '@angular/core';

import { LargeProgressbar } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-large-progressbars',
  templateUrl: './large-progressbars.html',
  styleUrls: ['./large-progressbars.scss'],
})
export class LargeProgressbars {
  public largeProgressData = LargeProgressbar;
}
