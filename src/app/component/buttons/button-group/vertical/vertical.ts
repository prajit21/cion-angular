import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical',
  imports: [NgbDropdownModule],
  templateUrl: './vertical.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./vertical.scss'],
})
export class Vertical {}
