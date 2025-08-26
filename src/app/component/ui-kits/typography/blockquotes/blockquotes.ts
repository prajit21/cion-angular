import { Component } from '@angular/core';

import { blackqutoesData } from '../../../../shared/data/component/ui-kits/typogaraphy/typogaraphy';

@Component({
  selector: 'app-blockquotes',
  imports: [],
  templateUrl: './blockquotes.html',
  styleUrls: ['./blockquotes.scss'],
})
export class Blockquotes {
  public blockquote = blackqutoesData;
}
