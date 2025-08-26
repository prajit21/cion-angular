import { Component } from '@angular/core';

import { BasicModal } from './basic-modal/basic-modal';
import { CenteredModal } from './centered-modal/centered-modal';
import { CustomModal } from './custom-modal/custom-modal';
import { FullscreenModal } from './fullscreen-modal/fullscreen-modal';
import { SizesModal } from './sizes-modal/sizes-modal';
import { StaticBackdropModal } from './static-backdrop-modal/static-backdrop-modal';
import { ToggleBetweenModals } from './toggle-between-modals/toggle-between-modals';

@Component({
  selector: 'app-modal',
  imports: [
    BasicModal,
    SizesModal,
    FullscreenModal,
    CenteredModal,
    ToggleBetweenModals,
    StaticBackdropModal,
    CustomModal,
  ],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
})
export class Modal {}
