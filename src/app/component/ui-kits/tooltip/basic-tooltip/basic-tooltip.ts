import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-tooltip',
  imports: [NgbTooltipModule],
  templateUrl: './basic-tooltip.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./basic-tooltip.scss'],
})
export class BasicTooltip {}
