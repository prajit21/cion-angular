import { SlicePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { JobsSimiler } from './jobs-similer/jobs-similer';
import { jobDetail } from '../../../shared/data/component/job-search/job-search';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-job-details',
  imports: [JobsSimiler, JobFilter, SlicePipe],
  templateUrl: './job-details.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./job-details.scss'],
})
export class JobDetails {
  public jobDetail = jobDetail;
}
