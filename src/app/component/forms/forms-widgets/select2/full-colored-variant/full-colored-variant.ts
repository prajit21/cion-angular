import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-full-colored-variant',
  imports: [CommonModule],
  templateUrl: './full-colored-variant.html',
  styleUrls: ['./full-colored-variant.scss'],
})
export class FullColoredVariant {
  colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse'];
}
