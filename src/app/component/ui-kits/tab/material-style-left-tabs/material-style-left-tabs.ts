import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-material-style-left-tabs',
  imports: [NgbNavModule],
  templateUrl: './material-style-left-tabs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./material-style-left-tabs.scss'],
})
export class MaterialStyleLeftTabs {
  public active = 1;
}
