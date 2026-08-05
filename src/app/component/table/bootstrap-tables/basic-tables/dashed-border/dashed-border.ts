import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DashedBorders } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-dashed-border',
  imports: [],
  templateUrl: './dashed-border.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./dashed-border.scss'],
})
export class DashedBorder {
  public dashborderData = DashedBorders;
}
