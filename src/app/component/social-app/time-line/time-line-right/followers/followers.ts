import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-followers',
  imports: [NgbAccordionModule],
  templateUrl: './followers.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./followers.scss'],
})
export class Followers {
  public followersData = data.Followers;
}
