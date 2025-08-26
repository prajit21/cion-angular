import { Component } from '@angular/core';

import { buttons, pills } from '../../../../shared/data/component/ui-kits/tag-pills/tag-pills';
import { CommonBadgesPills } from '../common-badges-pills/common-badges-pills';

@Component({
  selector: 'app-badge-pill',
  imports: [CommonBadgesPills],
  templateUrl: './badge-pill.html',
  styleUrls: ['./badge-pill.scss'],
})
export class BadgePill {
  public BadgesData = buttons;
  public PillsData = pills;
}
