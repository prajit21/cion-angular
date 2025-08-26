import { Component } from '@angular/core';

import { AjaxRequestMovie } from './ajax-request-movie/ajax-request-movie';
import { AutoCloseTimer } from './auto-close-timer/auto-close-timer';
import { BasicExample } from './basic-example/basic-example';
import { DangerAlert } from './danger-alert/danger-alert';
import { InfoAlert } from './info-alert/info-alert';
import { PikachuAlert } from './pikachu-alert/pikachu-alert';
import { QuestionsAlert } from './questions-alert/questions-alert';
import { SuccessMessage } from './success-message/success-message';
import { TitleTextAlert } from './title-text-alert/title-text-alert';
import { UsernameAlert } from './username-alert/username-alert';
import { WarningAlert } from './warning-alert/warning-alert';
import { WarningMode } from './warning-mode/warning-mode';

@Component({
  selector: 'app-sweetalert2',
  imports: [
    AjaxRequestMovie,
    AutoCloseTimer,
    BasicExample,
    DangerAlert,
    InfoAlert,
    PikachuAlert,
    QuestionsAlert,
    SuccessMessage,
    TitleTextAlert,
    UsernameAlert,
    WarningAlert,
    WarningMode,
  ],
  templateUrl: './sweetalert2.html',
  styleUrls: ['./sweetalert2.scss'],
})
export class Sweetalert2 {}
