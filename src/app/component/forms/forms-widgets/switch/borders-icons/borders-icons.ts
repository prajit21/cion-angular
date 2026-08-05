import { Component, ChangeDetectionStrategy } from '@angular/core';

import { bordericons } from '../../../../../shared/data/component/forms/forms-widgets/switch';

@Component({
  selector: 'app-borders-icons',
  imports: [],
  templateUrl: './borders-icons.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./borders-icons.scss'],
})
export class BordersIcons {
  public borderData = bordericons;
}
