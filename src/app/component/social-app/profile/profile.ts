import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { About } from '../about/about';
import { Friends } from '../friends/friends';
import { Photos } from '../photos/photos';
import { TimeLine } from '../time-line/time-line';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, TimeLine, About, Friends, Photos],
  templateUrl: './profile.html',
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
