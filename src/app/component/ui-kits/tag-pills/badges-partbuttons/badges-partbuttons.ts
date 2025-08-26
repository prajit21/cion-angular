import { Component } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { BadgePartButtons } from '../../../../shared/data/component/ui-kits/tag-pills/tag-pills';

@Component({
  selector: 'app-badges-partbuttons',
  imports: [Feathericon],
  templateUrl: './badges-partbuttons.html',
  styleUrls: ['./badges-partbuttons.scss'],
})
export class BadgesPartbuttons {
  public buttonspartData = BadgePartButtons;
}
