import { Component, ChangeDetectionStrategy } from '@angular/core';

import { commongroupButton } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-edges-button-group',
  imports: [],
  templateUrl: './edges-button-group.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./edges-button-group.scss'],
})
export class EdgesButtonGroup {
  public edgegroupData = commongroupButton;
}
