import { Component } from '@angular/core';

import { AdditionalContent } from './additional-content/additional-content';
import { DarkTheme } from './dark-theme/dark-theme';
import { DismissingDarkAlert } from './dismissing-dark-alert/dismissing-dark-alert';
import { DismissingLightAlert } from './dismissing-light-alert/dismissing-light-alert';
import { IconsTextAlerts } from './icons-text-alerts/icons-text-alerts';
import { LeftBorderAlert } from './left-border-alert/left-border-alert';
import { LightTheme } from './light-theme/light-theme';
import { LiveAlert } from './live-alert/live-alert';
import { OutlineAlerts } from './outline-alerts/outline-alerts';

@Component({
  selector: 'app-alert',
  imports: [
    DarkTheme,
    LightTheme,
    OutlineAlerts,
    IconsTextAlerts,
    DismissingDarkAlert,
    DismissingLightAlert,
    LiveAlert,
    LeftBorderAlert,
    AdditionalContent,
  ],
  templateUrl: './alert.html',
  styleUrls: ['./alert.scss'],
})
export class Alert {}
