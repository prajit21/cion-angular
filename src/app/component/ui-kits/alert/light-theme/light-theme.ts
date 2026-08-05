import { Component, ChangeDetectionStrategy } from '@angular/core';

import { lightThemeAlert } from '../../../../shared/data/component/ui-kits/alert/alert';

@Component({
  selector: 'app-light-theme',
  imports: [],
  templateUrl: './light-theme.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./light-theme.scss'],
})
export class LightTheme {
  public lightThemeData = lightThemeAlert;
}
