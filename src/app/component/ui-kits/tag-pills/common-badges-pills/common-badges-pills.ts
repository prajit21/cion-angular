import { Component, input } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { button } from '../../../../shared/data/component/ui-kits/tag-pills/tag-pills';

@Component({
  selector: 'app-common-badges-pills',
  imports: [Feathericon],
  templateUrl: './common-badges-pills.html',
  styleUrls: ['./common-badges-pills.scss'],
})
export class CommonBadgesPills {
  readonly data = input.required<button[]>();
}
