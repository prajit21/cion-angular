import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-following',
  imports: [NgbAccordionModule],
  templateUrl: './following.html',
  styleUrls: ['./following.scss'],
})
export class Following {
  public followingData = data.Following;
}
