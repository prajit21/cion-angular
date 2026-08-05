import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-popover',
  imports: [NgbPopoverModule],
  templateUrl: './basic-popover.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./basic-popover.scss'],
})
export class BasicPopover {}
