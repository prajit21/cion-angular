import { Component } from '@angular/core';

import { TaskSidemenu } from './task-sidemenu/task-sidemenu';

@Component({
  selector: 'app-tasks',
  imports: [TaskSidemenu],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.scss'],
})
export class Tasks {}
