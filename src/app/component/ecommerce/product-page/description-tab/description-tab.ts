import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-description-tab',
  imports: [CommonModule],
  templateUrl: './description-tab.html',
  styleUrls: ['./description-tab.scss'],
})
export class DescriptionTab {
  public openTab: string = 'febric';

  public tabbed(val: string) {
    this.openTab = val;
  }
}
