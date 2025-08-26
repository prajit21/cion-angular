import { Component } from '@angular/core';

import { Categories } from './categories/categories';
import { FindCource } from './find-cource/find-cource';
import { UpcomingCources } from './upcoming-cources/upcoming-cources';
import { findCourse } from '../../../shared/data/component/learning/learning';

@Component({
  selector: 'app-learning-filter',
  imports: [FindCource, Categories, UpcomingCources],
  templateUrl: './learning-filter.html',
  styleUrls: ['./learning-filter.scss'],
})
export class LearningFilter {
  public findCourse = findCourse;

  public isCollapsed: boolean = false;

  openFilter() {
    this.isCollapsed = !this.isCollapsed;
  }
}
