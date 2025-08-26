import { Component } from '@angular/core';

import { allData } from '../../../shared/data/component/search-result/search-result';

@Component({
  selector: 'app-all',
  imports: [],
  templateUrl: './all.html',
  styleUrls: ['./all.scss'],
})
export class All {
  public allData = allData;
}
