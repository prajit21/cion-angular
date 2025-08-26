import { Component } from '@angular/core';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { EdgeButtons, styleButton } from '../../../shared/data/component/buttons/edge-style';

@Component({
  selector: 'app-edge-style',
  imports: [NgbTooltipModule],
  templateUrl: './edge-style.html',
  styleUrls: ['./edge-style.scss'],
})
export class EdgeStyle {
  public EdgeData = EdgeButtons;
  public StylebuttonData = styleButton;
}
