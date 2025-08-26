import { Component } from '@angular/core';

import { FontStyles } from '../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-font-style',
  imports: [],
  templateUrl: './font-style.html',
  styleUrls: ['./font-style.scss'],
})
export class FontStyle {
  public FontstyleData = FontStyles;
}
