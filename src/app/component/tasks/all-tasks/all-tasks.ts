import { CommonModule } from '@angular/common';
import { Component, SimpleChanges, input } from '@angular/core';

import * as data from '../../../shared//data/component/tasks/task-list';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { Tasklist } from '../../../shared/data/component/tasks/task-list';

@Component({
  selector: 'app-all-tasks',
  imports: [Feathericon, CommonModule],
  templateUrl: './all-tasks.html',
  styleUrls: ['./all-tasks.scss'],
})
export class AllTasks {
  readonly selectedheading_id = input.required<number>();
  readonly selectedTagId = input.required<number>();

  public taskData = data.TaskData;
  public tagData = data.TagData;
  public heading_id!: number;
  public gettaskData!: Tasklist;

  ngOnInit(): void {
    this.taskData.map(data => {
      if (data.status) {
        this.gettaskData = data;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let id = changes['selectedheading_id']?.currentValue;
    this.taskData.map(data => {
      if (data.title_id === id) {
        this.gettaskData = data;
      }
    });

    let tagId = changes['selectedTagId']?.currentValue;
    this.tagData.map(data => {
      if (data.title_id === tagId) {
        this.gettaskData = data;
      }
    });
  }
}
