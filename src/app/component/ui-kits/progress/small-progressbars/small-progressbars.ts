import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SmallProgressbar } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-small-progressbars',
  imports: [CommonModule],
  templateUrl: './small-progressbars.html',
  styleUrls: ['./small-progressbars.scss'],
})
export class SmallProgressbars {
  public smallProgressData = SmallProgressbar;
}
