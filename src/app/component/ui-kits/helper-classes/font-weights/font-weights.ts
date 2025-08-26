import { Component } from '@angular/core';

import { FontWight } from '../../../../shared/data/component/ui-kits/helper-classes/helper-classes';

@Component({
  selector: 'app-font-weights',
  imports: [],
  templateUrl: './font-weights.html',
  styleUrls: ['./font-weights.scss'],
})
export class FontWeights {
  public fontWeightData = FontWight;
}
