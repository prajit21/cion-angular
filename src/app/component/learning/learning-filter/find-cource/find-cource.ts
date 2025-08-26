import { Component } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { findCourse } from '../../../../shared/data/component/learning/learning';

@Component({
  selector: 'app-find-cource',
  imports: [NgbCollapseModule, Feathericon],
  templateUrl: './find-cource.html',
  styleUrls: ['./find-cource.scss'],
})
export class FindCource {
  public isCollapsed = false;
  public findCourse = findCourse;
}
