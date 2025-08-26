import { Component } from '@angular/core';

import { commentsData } from '../../../shared/data/component/learning/learning';
import { BlogComment } from '../../blog/blog-single/blog-comment/blog-comment';
import { LearningFilter } from '../learning-filter/learning-filter';

@Component({
  selector: 'app-detailed-course',
  imports: [BlogComment, LearningFilter],
  templateUrl: './detailed-course.html',
  styleUrls: ['./detailed-course.scss'],
})
export class DetailedCourse {
  public commentsData = commentsData;
}
