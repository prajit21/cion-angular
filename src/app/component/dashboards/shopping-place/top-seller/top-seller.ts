import { Component } from '@angular/core';

import { TopSellingProduct } from './top-selling-product/top-selling-product';

@Component({
  selector: 'app-top-seller',
  imports: [TopSellingProduct],
  templateUrl: './top-seller.html',
  styleUrls: ['./top-seller.scss'],
})
export class TopSeller {}
