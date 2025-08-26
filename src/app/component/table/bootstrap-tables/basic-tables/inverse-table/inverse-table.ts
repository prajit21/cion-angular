import { Component } from '@angular/core';

import { InverseTables } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-inverse-table',
  imports: [],
  templateUrl: './inverse-table.html',
  styleUrls: ['./inverse-table.scss'],
})
export class InverseTable {
  public inversetableData = InverseTables;
}
