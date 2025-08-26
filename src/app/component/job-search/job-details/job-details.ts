import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { JobsSimiler } from './jobs-similer/jobs-similer';
import { jobDetail } from '../../../shared/data/component/job-search/job-search';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-job-details',
  imports: [CommonModule, JobsSimiler, JobFilter],
  templateUrl: './job-details.html',
  styleUrls: ['./job-details.scss'],
})
export class JobDetails {
  public jobDetail = jobDetail;
}
