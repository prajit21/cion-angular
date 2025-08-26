import { Component } from '@angular/core';

import { StripedData } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-striped-row-inverse-table',
  imports: [],
  templateUrl: './striped-row-inverse-table.html',
  styleUrls: ['./striped-row-inverse-table.scss'],
})
export class StripedRowInverseTable {
  public striped = StripedData;
}
