import { Component } from '@angular/core';

import { BasicTooltip } from './basic-tooltip/basic-tooltip';
import { ColoredTooltip } from './colored-tooltip/colored-tooltip';
import { FilledTooltip } from './filled-tooltip/filled-tooltip';
import { HtmlElementsTooltip } from './html-elements-tooltip/html-elements-tooltip';
import { TooltipDirections } from './tooltip-directions/tooltip-directions';

@Component({
  selector: 'app-tooltip',
  imports: [BasicTooltip, ColoredTooltip, TooltipDirections, HtmlElementsTooltip, FilledTooltip],
  templateUrl: './tooltip.html',
  styleUrls: ['./tooltip.scss'],
})
export class Tooltip {}
