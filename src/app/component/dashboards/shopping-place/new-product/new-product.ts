import { Component } from '@angular/core';

import { newProduct } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-new-product',
  imports: [],
  templateUrl: './new-product.html',
  styleUrls: ['./new-product.scss'],
})
export class NewProduct {
  public productData = newProduct;
}
