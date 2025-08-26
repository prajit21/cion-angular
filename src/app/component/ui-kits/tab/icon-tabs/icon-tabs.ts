import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icon-tabs',
  imports: [NgbNavModule],
  templateUrl: './icon-tabs.html',
  styleUrls: ['./icon-tabs.scss'],
})
export class IconTabs {
  public active = 1;
}
