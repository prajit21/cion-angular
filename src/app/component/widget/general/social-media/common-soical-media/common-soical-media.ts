import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { SocialMediaChartOptions } from '../../../../../shared/interface/widgets/chart';

@Component({
  selector: 'app-common-soical-media',
  imports: [NgApexchartsModule],
  templateUrl: './common-soical-media.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./common-soical-media.scss'],
})
export class CommonSoicalMedia {
  readonly data = input<SocialMediaChartOptions>();
}
