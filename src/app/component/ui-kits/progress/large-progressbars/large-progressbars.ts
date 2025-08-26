import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LargeProgressbar } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-large-progressbars',
  imports: [CommonModule],
  templateUrl: './large-progressbars.html',
  styleUrls: ['./large-progressbars.scss'],
})
export class LargeProgressbars {
  public largeProgressData = LargeProgressbar;
}
