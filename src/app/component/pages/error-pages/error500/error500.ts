import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error500',
  imports: [RouterModule],
  templateUrl: './error500.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./error500.scss'],
})
export class Error500 {}
