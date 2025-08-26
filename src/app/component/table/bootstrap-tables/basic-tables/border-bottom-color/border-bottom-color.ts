import { Component } from '@angular/core';

import { basictable } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-border-bottom-color',
  imports: [],
  templateUrl: './border-bottom-color.html',
  styleUrls: ['./border-bottom-color.scss'],
})
export class BorderBottomColor {
  public basicTable = basictable;
}
