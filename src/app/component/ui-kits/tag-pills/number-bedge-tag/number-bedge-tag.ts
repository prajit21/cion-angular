import { Component } from '@angular/core';

import {
  NumberBadge,
  NumberPillstag,
} from '../../../../shared/data/component/ui-kits/tag-pills/tag-pills';
import { CommonBadgesPills } from '../common-badges-pills/common-badges-pills';

@Component({
  selector: 'app-number-bedge-tag',
  imports: [CommonBadgesPills],
  templateUrl: './number-bedge-tag.html',
  styleUrls: ['./number-bedge-tag.scss'],
})
export class NumberBedgeTag {
  public NumberBadgeData = NumberBadge;
  public NumberPillsData = NumberPillstag;
}
