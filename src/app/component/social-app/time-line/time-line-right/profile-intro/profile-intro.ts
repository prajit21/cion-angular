import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-intro',
  imports: [NgbAccordionModule],
  templateUrl: './profile-intro.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./profile-intro.scss'],
})
export class ProfileIntro {}
