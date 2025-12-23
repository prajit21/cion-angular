
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Feathericon } from '../../feathericon/feathericon';

@Component({
  selector: 'app-cart',
  imports: [RouterModule, Feathericon],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class Cart {
  public products: boolean = false;

  cart() {
    this.products = !this.products;
  }
}
