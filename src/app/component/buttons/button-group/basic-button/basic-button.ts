import { Component } from '@angular/core';

import { commongroupButton } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-basic-button',
  imports: [],
  templateUrl: './basic-button.html',
  styleUrls: ['./basic-button.scss'],
})
export class BasicButton {
  public basicgropuData = commongroupButton;
}
