import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Profile } from './profile/profile';

@Component({
  selector: 'app-soical-app',
  imports: [Profile],
  templateUrl: './soical-app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./soical-app.scss'],
})
export class SoicalApp {}
