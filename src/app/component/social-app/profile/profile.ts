import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { About } from '../about/about';
import { Friends } from '../friends/friends';
import { Photos } from '../photos/photos';
import { TimeLine } from '../time-line/time-line';

@Component({
  selector: 'app-profile',
  imports: [TimeLine, About, Friends, Photos, NgClass],
  templateUrl: './profile.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./profile.scss'],
})
export class Profile {
  active = 1;
  public openTab: string = 'timeline';

  constructor() {}

  public tabbed(val: string) {
    this.openTab = val;
  }
}
