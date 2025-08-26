import { Component } from '@angular/core';

import { SideMenu } from './side-menu/side-menu';

@Component({
  selector: 'app-bookmarks',
  imports: [SideMenu],
  templateUrl: './bookmarks.html',
  styleUrls: ['./bookmarks.scss'],
})
export class Bookmarks {}
