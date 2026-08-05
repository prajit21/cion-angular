import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { coursesData } from '../../../../shared/data/component/widget/general/general';

@Component({
  selector: 'app-courses',
  imports: [RouterModule],
  templateUrl: './courses.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./courses.scss'],
})
export class Courses {
  public courseData = coursesData;
}
