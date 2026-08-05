import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PrimaryBackground } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-inverse-table-primary-background',
  imports: [],
  templateUrl: './inverse-table-primary-background.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./inverse-table-primary-background.scss'],
})
export class InverseTablePrimaryBackground {
  public primaryData = PrimaryBackground;
}
