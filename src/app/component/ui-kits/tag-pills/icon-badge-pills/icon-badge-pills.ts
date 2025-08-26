import { Component } from '@angular/core';

import {
  iconbadge,
  iconpills,
} from '../../../../shared/data/component/ui-kits/tag-pills/tag-pills';
import { CommonBadgesPills } from '../common-badges-pills/common-badges-pills';

@Component({
  selector: 'app-icon-badge-pills',
  imports: [CommonBadgesPills],
  templateUrl: './icon-badge-pills.html',
  styleUrls: ['./icon-badge-pills.scss'],
})
export class IconBadgePills {
  public IconBadeData = iconbadge;
  public IconpillsData = iconpills;
}
