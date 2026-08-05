import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-file-manager-sidebar',
  imports: [Feathericon],
  templateUrl: './file-manager-sidebar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./file-manager-sidebar.scss'],
})
export class FileManagerSidebar {
  public open: boolean = false;

  openMenu() {
    this.open = !this.open;
  }
}
