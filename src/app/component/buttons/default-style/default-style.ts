import { Component } from '@angular/core';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { DefaultButtons, styleButton } from '../../../shared/data/component/buttons/default-style';

@Component({
  selector: 'app-default-style',
  imports: [NgbTooltipModule],
  templateUrl: './default-style.html',
  styleUrls: ['./default-style.scss'],
})
export class DefaultStyle {
  public defaultstyleData = DefaultButtons;
  public StylebuttonData = styleButton;
}
