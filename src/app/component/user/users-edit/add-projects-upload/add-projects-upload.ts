import { Component } from '@angular/core';

import { projectData } from '../../../../shared/data/component/user/users-edit';

@Component({
  selector: 'app-add-projects-upload',
  imports: [],
  templateUrl: './add-projects-upload.html',
  styleUrls: ['./add-projects-upload.scss'],
})
export class AddProjectsUpload {
  public projectitem = projectData;
}
