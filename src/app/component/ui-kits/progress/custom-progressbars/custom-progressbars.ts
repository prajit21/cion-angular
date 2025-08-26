import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CustomProgressbar } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-custom-progressbars',
  imports: [CommonModule],
  templateUrl: './custom-progressbars.html',
  styleUrls: ['./custom-progressbars.scss'],
})
export class CustomProgressbars {
  public customprogressData = CustomProgressbar;
}
