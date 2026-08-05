import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error403',
  imports: [RouterModule],
  templateUrl: './error403.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./error403.scss'],
})
export class Error403 {}
