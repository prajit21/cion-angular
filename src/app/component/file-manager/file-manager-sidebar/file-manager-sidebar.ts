import { Component } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-file-manager-sidebar',
  imports: [Feathericon],
  templateUrl: './file-manager-sidebar.html',
  styleUrls: ['./file-manager-sidebar.scss'],
})
export class FileManagerSidebar {
  public open: boolean = false;

  openMenu() {
    this.open = !this.open;
  }
}
