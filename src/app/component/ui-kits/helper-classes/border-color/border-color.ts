import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Bordercolors } from '../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-border-color',
  imports: [],
  templateUrl: './border-color.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./border-color.scss'],
})
export class BorderColor {
  public borderColorData = Bordercolors;
}
