import { Component } from '@angular/core';

import { CommonBackground } from './common-background/common-background';
import * as borderData from '../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-background-colors',
  imports: [CommonBackground],
  templateUrl: './background-colors.html',
  styleUrls: ['./background-colors.scss'],
})
export class BackgroundColors {
  public DarkBackgrounData = borderData.DarkBackground;
  public LightBackgroundsData = borderData.Lightbackgrounds;
  public ExtendedBackgroundData = borderData.ExtendedBackground;
}
