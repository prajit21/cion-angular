import { Component } from '@angular/core';

import { tablehead } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-table-head-options',
  imports: [],
  templateUrl: './table-head-options.html',
  styleUrls: ['./table-head-options.scss'],
})
export class TableHeadOptions {
  public headoptionsData = tablehead;
}
