import { Component } from '@angular/core';

import { TextColores } from '../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-text-colors',
  imports: [],
  templateUrl: './text-colors.html',
  styleUrls: ['./text-colors.scss'],
})
export class TextColors {
  public TextColorData = TextColores;
}
