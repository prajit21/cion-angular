import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error404',
  imports: [RouterModule],
  templateUrl: './error404.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./error404.scss'],
})
export class Error404 {}
