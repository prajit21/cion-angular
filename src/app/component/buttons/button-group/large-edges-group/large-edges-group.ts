import { Component, ChangeDetectionStrategy } from '@angular/core';

import { commongroupButton } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-large-edges-group',
  imports: [],
  templateUrl: './large-edges-group.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./large-edges-group.scss'],
})
export class LargeEdgesGroup {
  public largedgebuttongroup = commongroupButton;
}
