import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import * as data from '../../../shared/data/component/e-commerce/product-list';
import { ProductListDirective, SortEvent } from '../../../shared/directives/product-list.directive';
import { productList } from '../../../shared/interface/product-list';
import { ProductListService } from '../../../shared/services/ecommerce/product-list.service';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, RouterModule, CommonModule, ProductListDirective, NgbPaginationModule],
  providers: [ProductListService, DecimalPipe],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'],
})
export class ProductList {
  public service = inject(ProductListService);
  public products$: Observable<productList[]> = this.service.support$;
  public total$: Observable<number> = this.service.total$;
  public Data: productList[];
  public PRODUCTLIST = data.PRODUCTLIST;

  readonly headers = viewChildren(ProductListDirective);

  ngOnInit() {
    this.products$.subscribe(res => {
      this.Data = res;
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach(header => {
      if (header.sortable() !== column) {
        header.currentDirection.set('');
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
