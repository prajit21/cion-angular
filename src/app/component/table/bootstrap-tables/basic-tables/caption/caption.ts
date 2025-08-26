import { Component } from '@angular/core';

import { caption } from '../../../../../shared/data/component/table/bootstrap-table/basic-tables';

@Component({
  selector: 'app-caption',
  imports: [],
  templateUrl: './caption.html',
  styleUrls: ['./caption.scss'],
})
export class Caption {
  public captionData = caption;
}
