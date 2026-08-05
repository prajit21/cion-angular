import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Listradios } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-lists-radios',
  imports: [],
  templateUrl: './lists-radios.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lists-radios.scss'],
})
export class ListsRadios {
  public listradiosData = Listradios;
}
