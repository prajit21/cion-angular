import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { whislist } from '../../../shared/data/component/e-commerce/wishlist';

@Component({
  selector: 'app-wishlist',
  imports: [RouterModule],
  templateUrl: './wishlist.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./wishlist.scss'],
})
export class Wishlist {
  public wishlistData = whislist;
}
