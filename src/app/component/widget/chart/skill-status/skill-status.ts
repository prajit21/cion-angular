import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as Skillchart from '../../../../shared/data/component/widget/chart/widget-charts';

@Component({
  selector: 'app-skill-status',
  imports: [NgApexchartsModule],
  templateUrl: './skill-status.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./skill-status.scss'],
})
export class SkillStatus {
  public skillstauschart = Skillchart.skillStatus;
}
