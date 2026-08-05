import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BlogComment } from './blog-comment/blog-comment';
import { commentsData } from '../../../shared/data/component/blog/blog-data';

@Component({
  selector: 'app-blog-single',
  imports: [BlogComment],
  templateUrl: './blog-single.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./blog-single.scss'],
})
export class BlogSingle {
  public commentsData = commentsData;
}
