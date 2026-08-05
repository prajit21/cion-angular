import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nesting',
  imports: [NgbDropdownModule],
  templateUrl: './nesting.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./nesting.scss'],
})
export class Nesting {}
