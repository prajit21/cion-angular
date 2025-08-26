import { Component } from '@angular/core';

import { commongroupButton } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-large-button-group',
  imports: [],
  templateUrl: './large-button-group.html',
  styleUrls: ['./large-button-group.scss'],
})
export class LargeButtonGroup {
  public largbuttongroup = commongroupButton;
}
