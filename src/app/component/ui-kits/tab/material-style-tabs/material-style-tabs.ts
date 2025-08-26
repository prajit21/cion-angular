import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-material-style-tabs',
  imports: [NgbNavModule],
  templateUrl: './material-style-tabs.html',
  styleUrls: ['./material-style-tabs.scss'],
})
export class MaterialStyleTabs {
  public active = 1;
}
