import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { blogData } from '../../../shared/data/component/blog/blog-data';

@Component({
  selector: 'app-blog-details',
  imports: [CommonModule],
  templateUrl: './blog-details.html',
  styleUrls: ['./blog-details.scss'],
})
export class BlogDetails {
  public blog = blogData;
}
