import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Shape } from '../../../../shared/data/component/ui-kits/avatar/avavtar';

@Component({
  selector: 'app-shapes',
  imports: [],
  templateUrl: './shapes.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./shapes.scss'],
})
export class Shapes {
  public shapesData = Shape;
}
