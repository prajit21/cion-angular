import { Component, input } from '@angular/core';

import { hobbiesEduction } from '../../../../../shared/data/component/social-media/social-media-data';

@Component({
  selector: 'app-hobbies-education',
  imports: [],
  templateUrl: './hobbies-education.html',
  styleUrls: ['./hobbies-education.scss'],
})
export class HobbiesEducation {
  readonly data = input<hobbiesEduction>();
}
