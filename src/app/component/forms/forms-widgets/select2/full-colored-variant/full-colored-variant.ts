import { TitleCasePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-full-colored-variant',
  imports: [TitleCasePipe],
  templateUrl: './full-colored-variant.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./full-colored-variant.scss'],
})
export class FullColoredVariant {
  colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse'];
}
