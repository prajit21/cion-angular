import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pills-tabs',
  imports: [NgbNavModule],
  templateUrl: './pills-tabs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./pills-tabs.scss'],
})
export class PillsTabs {
  public active = 3;
}
