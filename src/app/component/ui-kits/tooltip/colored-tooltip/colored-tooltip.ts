import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-colored-tooltip',
  imports: [NgbTooltipModule],
  templateUrl: './colored-tooltip.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./colored-tooltip.scss'],
})
export class ColoredTooltip {}
