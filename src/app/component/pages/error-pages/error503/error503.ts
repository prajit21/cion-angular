import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error503',
  imports: [RouterModule],
  templateUrl: './error503.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./error503.scss'],
})
export class Error503 {}
