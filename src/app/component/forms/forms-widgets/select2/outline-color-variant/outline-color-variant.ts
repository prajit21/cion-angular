import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-outline-color-variant',
  imports: [CommonModule],
  templateUrl: './outline-color-variant.html',
  styleUrls: ['./outline-color-variant.scss'],
})
export class OutlineColorVariant {
  colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse'];
}
