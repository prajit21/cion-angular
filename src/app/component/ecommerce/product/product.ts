import { Component, inject } from '@angular/core';

import { Filter } from './filter/filter';
import { ProductBox } from './product-box/product-box';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { ProductBoxFilterService } from '../../../shared/services/ecommerce/product-box-filter.service';

@Component({
  selector: 'app-product',
  imports: [Feathericon, Filter, ProductBox],
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
})
export class Product {
  private ProductBoxFilterService = inject(ProductBoxFilterService);
  listView: boolean = false;
  openSidebar: boolean = false;
  OpenFilter: boolean = false;

  gridOpens() {
    this.listView = false;
    this.ProductBoxFilterService.gridOpen();
  }
  listOpens() {
    this.listView = true;
    this.ProductBoxFilterService.listOpen();
  }
  grid2s() {
    this.listView = false;
    this.ProductBoxFilterService.grid2();
  }
  grid3s() {
    this.listView = false;
    this.ProductBoxFilterService.grid3();
  }
  grid6s() {
    this.listView = false;
    this.ProductBoxFilterService.grid6();
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }
  openFilter() {
    this.openSidebar = !this.openSidebar;
  }
}
