import { Component, ChangeDetectionStrategy } from '@angular/core';

import { VerticalStylel } from '../../../../../shared/data/component/forms/form-controls/mega-options';

@Component({
  selector: 'app-vertical-style',
  imports: [],
  templateUrl: './vertical-style.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./vertical-style.scss'],
})
export class VerticalStyle {
  public verticalstyleData = VerticalStylel;
}
