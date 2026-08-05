import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error400',
  imports: [RouterModule],
  templateUrl: './error400.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./error400.scss'],
})
export class Error400 {}
