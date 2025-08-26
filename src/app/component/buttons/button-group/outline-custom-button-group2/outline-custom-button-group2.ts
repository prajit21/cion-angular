import { Component } from '@angular/core';

import { outlinecustomData } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-outline-custom-button-group2',
  imports: [],
  templateUrl: './outline-custom-button-group2.html',
  styleUrls: ['./outline-custom-button-group2.scss'],
})
export class OutlineCustomButtonGroup2 {
  public outlinecustom = outlinecustomData;
}
