import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-tabs',
  imports: [NgbNavModule],
  templateUrl: './vertical-tabs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./vertical-tabs.scss'],
})
export class VerticalTabs {
  public active = 2;
}
