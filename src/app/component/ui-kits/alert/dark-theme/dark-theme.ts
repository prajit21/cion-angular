import { Component, ChangeDetectionStrategy } from '@angular/core';

import { darkThemAlert } from '../../../../shared/data/component/ui-kits/alert/alert';

@Component({
  selector: 'app-dark-theme',
  imports: [],
  templateUrl: './dark-theme.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./dark-theme.scss'],
})
export class DarkTheme {
  public darkThemeData = darkThemAlert;
}
