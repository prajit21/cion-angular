import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-profile',
  imports: [NgbAccordionModule],
  templateUrl: './my-profile.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./my-profile.scss'],
})
export class MyProfile {
  public isCollapsed = false;
}
