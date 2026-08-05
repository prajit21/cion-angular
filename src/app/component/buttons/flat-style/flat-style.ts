import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { FlatButtons, StyleButton } from '../../../shared/data/component/buttons/flat-buttons';

@Component({
  selector: 'app-flat-style',
  imports: [NgbTooltipModule],
  templateUrl: './flat-style.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./flat-style.scss'],
})
export class FlatStyle {
  public FlatButtonsData = FlatButtons;
  public StylebuttonData = StyleButton;
}
