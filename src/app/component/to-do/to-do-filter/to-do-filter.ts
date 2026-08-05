import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-to-do-filter',
  imports: [Feathericon],
  templateUrl: './to-do-filter.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./to-do-filter.scss'],
})
export class ToDoFilter {
  public open: boolean = false;

  openFilter() {
    this.open = !this.open;
  }
}
