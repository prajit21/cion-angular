import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-full',
  imports: [RouterModule],
  templateUrl: './full.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./full.scss'],
})
export class Full {}
