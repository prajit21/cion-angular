import { Component } from '@angular/core';

import { Education } from './education/education';
import { Experience } from './experience/experience';
import { PersonalDetails } from './personal-details/personal-details';
import { UploadFiles } from './upload-files/upload-files';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-apply',
  imports: [PersonalDetails, Education, Experience, UploadFiles, JobFilter],
  templateUrl: './apply.html',
  styleUrls: ['./apply.scss'],
})
export class Apply {}
