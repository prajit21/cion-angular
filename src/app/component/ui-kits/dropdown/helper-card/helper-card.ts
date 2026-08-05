import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { HelperCards } from '../../../../shared/data/component/ui-kits/dropdown/dropdown';

@Component({
  selector: 'app-helper-card',
  imports: [NgbDropdownModule],
  templateUrl: './helper-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./helper-card.scss'],
})
export class HelperCard {
  public helpercardData = HelperCards;
}
