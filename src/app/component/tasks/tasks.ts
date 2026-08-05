import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TaskSidemenu } from './task-sidemenu/task-sidemenu';

@Component({
  selector: 'app-tasks',
  imports: [TaskSidemenu],
  templateUrl: './tasks.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./tasks.scss'],
})
export class Tasks {}
