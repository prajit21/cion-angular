import { Component } from '@angular/core';

import { AbsoluteCard } from './absolute-card/absolute-card';
import { AbsoluteCard2 } from './absolute-card2/absolute-card2';
import { BorderBottom } from './border-bottom/border-bottom';
import { BorderLeft } from './border-left/border-left';
import { BorderPrimaryState } from './border-primary-state/border-primary-state';
import { BorderRight } from './border-right/border-right';
import { BorderSecondaryState } from './border-secondary-state/border-secondary-state';
import { BorderTop } from './border-top/border-top';
import { BorderWarningState } from './border-warning-state/border-warning-state';

@Component({
  selector: 'app-creative-card',
  imports: [
    AbsoluteCard,
    AbsoluteCard2,
    BorderLeft,
    BorderRight,
    BorderTop,
    BorderBottom,
    BorderPrimaryState,
    BorderWarningState,
    BorderSecondaryState,
  ],
  templateUrl: './creative-card.html',
  styleUrls: ['./creative-card.scss'],
})
export class CreativeCard {}
