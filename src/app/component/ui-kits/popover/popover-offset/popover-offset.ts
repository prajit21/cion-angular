import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover-offset',
  imports: [NgbPopoverModule],
  templateUrl: './popover-offset.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./popover-offset.scss'],
})
export class PopoverOffset {}
