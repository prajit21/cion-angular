import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-border-tabs',
  imports: [NgbNavModule],
  templateUrl: './border-tabs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./border-tabs.scss'],
})
export class BorderTabs {
  public active = 2;
}
