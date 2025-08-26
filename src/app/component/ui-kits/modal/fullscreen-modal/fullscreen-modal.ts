import { Component } from '@angular/core';

import { FullscreenBelow } from './fullscreen-below/fullscreen-below';
import { FullscreenBelowLg } from './fullscreen-below-lg/fullscreen-below-lg';
import { FullscreenBelowMd } from './fullscreen-below-md/fullscreen-below-md';
import { FullscreenBelowSm } from './fullscreen-below-sm/fullscreen-below-sm';
import { FullscreenBelowXl } from './fullscreen-below-xl/fullscreen-below-xl';
import { FullscreenBelowXxl } from './fullscreen-below-xxl/fullscreen-below-xxl';

@Component({
  selector: 'app-fullscreen-modal',
  imports: [
    FullscreenBelow,
    FullscreenBelowSm,
    FullscreenBelowMd,
    FullscreenBelowLg,
    FullscreenBelowXl,
    FullscreenBelowXxl,
  ],
  templateUrl: './fullscreen-modal.html',
  styleUrls: ['./fullscreen-modal.scss'],
})
export class FullscreenModal {}
