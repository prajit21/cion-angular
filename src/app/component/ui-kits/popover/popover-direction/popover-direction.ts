import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover-direction',
  imports: [NgbPopoverModule],
  templateUrl: './popover-direction.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./popover-direction.scss'],
})
export class PopoverDirection {}
