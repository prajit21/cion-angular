import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AdditionalContents } from '../../../../shared/data/component/ui-kits/alert/alert';

@Component({
  selector: 'app-additional-content',
  imports: [],
  templateUrl: './additional-content.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./additional-content.scss'],
})
export class AdditionalContent {
  public additionalData = AdditionalContents;
}
