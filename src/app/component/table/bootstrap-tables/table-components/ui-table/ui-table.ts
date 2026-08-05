import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ui-table',
  imports: [NgbDropdownModule],
  templateUrl: './ui-table.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./ui-table.scss'],
})
export class UiTable {}
