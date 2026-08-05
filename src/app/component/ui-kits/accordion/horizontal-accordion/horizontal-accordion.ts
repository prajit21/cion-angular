import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-horizontal-accordion',
  imports: [],
  templateUrl: './horizontal-accordion.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./horizontal-accordion.scss'],
})
export class HorizontalAccordion {
  public togglecollpese = false;

  onClick() {
    this.togglecollpese = !this.togglecollpese;
  }
}
