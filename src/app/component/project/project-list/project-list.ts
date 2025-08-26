import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import * as projectData from '../../../shared/data/component/project/project-list';
import { Project } from '../../../shared/interface/product-list';

@Component({
  selector: 'app-project-list',
  imports: [Feathericon, RouterModule, CommonModule],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.scss'],
})
export class ProjectList {
  public active = 1;
  public openTab: string = 'All';

  public ProjectLists = projectData.ProjectList;
  public listUser: Project[] = [];
  public filterData: Project[] = this.ProjectLists;

  public tabbed(val: string) {
    this.openTab = val;
    this.filterData =
      val !== 'All'
        ? this.ProjectLists.filter((data: Project) => {
            return data.badge == this.openTab ? true : false;
          })
        : this.ProjectLists;
  }
}
