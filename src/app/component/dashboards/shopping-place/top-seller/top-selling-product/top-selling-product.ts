import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-selling-product',
  imports: [RouterModule],
  templateUrl: './top-selling-product.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./top-selling-product.scss'],
})
export class TopSellingProduct {}
