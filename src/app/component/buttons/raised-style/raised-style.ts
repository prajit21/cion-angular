import { Component } from '@angular/core';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { raisedButtons, styleButton } from '../../../shared/data/component/buttons/raised-style';

@Component({
  selector: 'app-raised-style',
  imports: [NgbTooltipModule],
  templateUrl: './raised-style.html',
  styleUrls: ['./raised-style.scss'],
})
export class RaisedStyle {
  public RaisedData = raisedButtons;
  public StylebuttonData = styleButton;
}
