import { Component } from '@angular/core';

import { sizingTable } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-sizing-tables',
  imports: [],
  templateUrl: './sizing-tables.html',
  styleUrls: ['./sizing-tables.scss'],
})
export class SizingTables {
  public sizingData = sizingTable;
}
