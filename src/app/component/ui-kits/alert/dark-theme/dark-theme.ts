import { Component } from '@angular/core';

import { darkThemAlert } from '../../../../shared/data/component/ui-kits/alert/alert';

@Component({
  selector: 'app-dark-theme',
  imports: [],
  templateUrl: './dark-theme.html',
  styleUrls: ['./dark-theme.scss'],
})
export class DarkTheme {
  public darkThemeData = darkThemAlert;
}
