import { Component, inject } from '@angular/core';

import { NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  imports: [NgbDatepickerModule],
  templateUrl: './datepicker.html',
  styleUrls: ['./datepicker.scss'],
})
export class Datepicker {
  date!: { year: number; month: number };

  public calendar = inject(NgbCalendar);
}
