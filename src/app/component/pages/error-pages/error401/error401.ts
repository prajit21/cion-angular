import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error401',
  imports: [RouterModule],
  templateUrl: './error401.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./error401.scss'],
})
export class Error401 {}
