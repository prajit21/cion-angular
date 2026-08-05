import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  imports: [RouterModule],
  templateUrl: './maintenance.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./maintenance.scss'],
})
export class Maintenance {}
