import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-followers',
  imports: [NgbAccordionModule],
  templateUrl: './followers.html',
  styleUrls: ['./followers.scss'],
})
export class Followers {
  public followersData = data.Followers;
}
