import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  imports: [NgbDatepickerModule],
  templateUrl: './datepicker.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./datepicker.scss'],
})
export class Datepicker {
  date!: { year: number; month: number };

  public calendar = inject(NgbCalendar);
}
