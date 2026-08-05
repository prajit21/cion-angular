import { Component, ChangeDetectionStrategy } from '@angular/core';

import { customHover } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-custom-table-color-stripped',
  imports: [],
  templateUrl: './custom-table-color-stripped.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./custom-table-color-stripped.scss'],
})
export class CustomTableColorStripped {
  public customhoverData = customHover;
}
