
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-feather-icon',
  imports: [FormsModule],
  templateUrl: './feathericon.html',
  styleUrls: ['./feathericon.scss'],
})
export class Feathericon {
  public readonly icon = input<string>();

  ngAfterViewInit() {
    feather.replace();
  }
}
