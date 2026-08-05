import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-directions',
  imports: [NgbTooltipModule],
  templateUrl: './tooltip-directions.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./tooltip-directions.scss'],
})
export class TooltipDirections {}
