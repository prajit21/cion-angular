import { Component } from '@angular/core';

import { Shape } from '../../../../shared/data/component/ui-kits/avatar/avavtar';

@Component({
  selector: 'app-shapes',
  imports: [],
  templateUrl: './shapes.html',
  styleUrls: ['./shapes.scss'],
})
export class Shapes {
  public shapesData = Shape;
}
