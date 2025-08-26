import { Component, input } from '@angular/core';

import { comments } from '../../../../shared/data/component/blog/blog-data';

@Component({
  selector: 'app-blog-comment',
  imports: [],
  templateUrl: './blog-comment.html',
  styleUrls: ['./blog-comment.scss'],
})
export class BlogComment {
  readonly data = input<comments[]>();
}
