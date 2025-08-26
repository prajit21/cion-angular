import { Component } from '@angular/core';

import { gridColumn } from '../../../../shared/data/component/ui-kits/grid/grid-options';

@Component({
  selector: 'app-grid-column',
  imports: [],
  templateUrl: './grid-column.html',
  styleUrls: ['./grid-column.scss'],
})
export class GridColumn {
  public gridColumnData = gridColumn;
}
