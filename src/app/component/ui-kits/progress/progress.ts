import { Component } from '@angular/core';

import { BasicProgressbar } from './basic-progressbar/basic-progressbar';
import { CustomHeightProgressbars } from './custom-height-progressbars/custom-height-progressbars';
import { CustomProgressbars } from './custom-progressbars/custom-progressbars';
import { LargeProgressbars } from './large-progressbars/large-progressbars';
import { MultipleBars } from './multiple-bars/multiple-bars';
import { NumbersStepsProgress } from './numbers-steps-progress/numbers-steps-progress';
import { SmallProgressbars } from './small-progressbars/small-progressbars';
import { StripedAnimatedProgress } from './striped-animated-progress/striped-animated-progress';

@Component({
  selector: 'app-progress',
  imports: [
    BasicProgressbar,
    StripedAnimatedProgress,
    MultipleBars,
    NumbersStepsProgress,
    CustomProgressbars,
    SmallProgressbars,
    LargeProgressbars,
    CustomHeightProgressbars,
  ],
  templateUrl: './progress.html',
  styleUrls: ['./progress.scss'],
})
export class Progress {}
