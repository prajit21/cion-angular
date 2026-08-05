import { Component, ChangeDetectionStrategy } from '@angular/core';

import { commongroupButton } from '../../../../shared/data/component/buttons/button-group';

@Component({
  selector: 'app-basic-button',
  imports: [],
  templateUrl: './basic-button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./basic-button.scss'],
})
export class BasicButton {
  public basicgropuData = commongroupButton;
}
