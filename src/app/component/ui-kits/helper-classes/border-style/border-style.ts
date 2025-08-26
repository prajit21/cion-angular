import { Component } from '@angular/core';

import { CommonBorder } from './common-border/common-border';
import * as borderData from '../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-border-style',
  imports: [CommonBorder],
  templateUrl: './border-style.html',
  styleUrls: ['./border-style.scss'],
})
export class BorderStyle {
  public customborder = borderData.Customborder;
  public borderColor = borderData.colorBorders;
  public borderWiths = borderData.borderWith;
  public textColors = borderData.TextColor;
}
