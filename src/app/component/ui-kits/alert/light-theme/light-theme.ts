import { Component } from '@angular/core';

import { lightThemeAlert } from '../../../../shared/data/component/ui-kits/alert/alert';

@Component({
  selector: 'app-light-theme',
  imports: [],
  templateUrl: './light-theme.html',
  styleUrls: ['./light-theme.scss'],
})
export class LightTheme {
  public lightThemeData = lightThemeAlert;
}
