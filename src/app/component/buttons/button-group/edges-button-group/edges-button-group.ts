import { Component } from '@angular/core';

import { commongroupButton } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-edges-button-group',
  imports: [],
  templateUrl: './edges-button-group.html',
  styleUrls: ['./edges-button-group.scss'],
})
export class EdgesButtonGroup {
  public edgegroupData = commongroupButton;
}
