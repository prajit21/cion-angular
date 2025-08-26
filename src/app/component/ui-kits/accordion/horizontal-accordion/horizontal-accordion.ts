import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-accordion',
  imports: [],
  templateUrl: './horizontal-accordion.html',
  styleUrls: ['./horizontal-accordion.scss'],
})
export class HorizontalAccordion {
  public togglecollpese = false;

  onClick() {
    this.togglecollpese = !this.togglecollpese;
  }
}
