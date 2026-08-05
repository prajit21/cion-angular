import { Component, ChangeDetectionStrategy } from '@angular/core';

import { responsiveTable } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-responsive-tables-light-background',
  imports: [],
  templateUrl: './responsive-tables-light-background.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./responsive-tables-light-background.scss'],
})
export class ResponsiveTablesLightBackground {
  public responiveData = responsiveTable;
}
