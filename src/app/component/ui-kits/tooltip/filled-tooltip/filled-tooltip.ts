import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filled-tooltip',
  imports: [NgbTooltipModule],
  templateUrl: './filled-tooltip.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./filled-tooltip.scss'],
})
export class FilledTooltip {}
