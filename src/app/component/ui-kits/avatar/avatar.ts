import { Component } from '@angular/core';

import { Grouping } from './grouping/grouping';
import { Ratio } from './ratio/ratio';
import { Shapes } from './shapes/shapes';
import { Sizes } from './sizes/sizes';
import { StatusIndicator } from './status-indicator/status-indicator';

@Component({
  selector: 'app-avatar',
  imports: [Sizes, StatusIndicator, Shapes, Ratio, Grouping],
  templateUrl: './avatar.html',
  styleUrls: ['./avatar.scss'],
})
export class Avatar {}
