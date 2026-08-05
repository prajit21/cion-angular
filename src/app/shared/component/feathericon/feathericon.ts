import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-feather-icon',
  imports: [FormsModule],
  templateUrl: './feathericon.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./feathericon.scss'],
})
export class Feathericon {
  public readonly icon = input<string>();

  ngAfterViewInit() {
    feather.replace();
  }
}
