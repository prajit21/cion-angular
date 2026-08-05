import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ExtraLargeModal } from './extra-large-modal/extra-large-modal';
import { FullScreenModal } from './full-screen-modal/full-screen-modal';
import { LargeModal } from './large-modal/large-modal';
import { SmallModal } from './small-modal/small-modal';

@Component({
  selector: 'app-sizes-modal',
  imports: [FullScreenModal, ExtraLargeModal, LargeModal, SmallModal],
  templateUrl: './sizes-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./sizes-modal.scss'],
})
export class SizesModal {}
