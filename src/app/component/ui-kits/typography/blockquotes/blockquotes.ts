import { Component, ChangeDetectionStrategy } from '@angular/core';

import { blackqutoesData } from '../../../../shared/data/component/ui-kits/typogaraphy/typogaraphy';

@Component({
  selector: 'app-blockquotes',
  imports: [],
  templateUrl: './blockquotes.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./blockquotes.scss'],
})
export class Blockquotes {
  public blockquote = blackqutoesData;
}
