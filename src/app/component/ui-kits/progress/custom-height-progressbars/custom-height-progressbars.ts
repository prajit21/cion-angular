import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { customheightprogress } from '../../../../shared/data/component/ui-kits/progressbar/progress';

@Component({
  selector: 'app-custom-height-progressbars',
  imports: [CommonModule],
  templateUrl: './custom-height-progressbars.html',
  styleUrls: ['./custom-height-progressbars.scss'],
})
export class CustomHeightProgressbars {
  public customheightData = customheightprogress;
}
