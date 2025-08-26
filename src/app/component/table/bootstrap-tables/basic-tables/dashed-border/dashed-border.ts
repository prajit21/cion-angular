import { Component } from '@angular/core';

import { DashedBorders } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-dashed-border',
  imports: [],
  templateUrl: './dashed-border.html',
  styleUrls: ['./dashed-border.scss'],
})
export class DashedBorder {
  public dashborderData = DashedBorders;
}
