import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { orderHistory } from '../../../../shared/data/component/e-commerce/orders';
import { OdersdataDirective, SortEvent } from '../../../../shared/directives/odersdata.directive';
import { ORDERS } from '../../../../shared/interface/odershistory';
import { OrderService } from '../../../../shared/services/ecommerce/order.service';

@Component({
  selector: 'app-datatable-order-history',
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    OdersdataDirective,
    Feathericon,
    NgbPaginationModule,
  ],
  templateUrl: './datatable-order-history.html',
  styleUrls: ['./datatable-order-history.scss'],
  providers: [OrderService, DecimalPipe],
})
export class DatatableOrderHistory {
  public service = inject(OrderService);
  public decimalPipe = inject(DecimalPipe);

  public products$: Observable<ORDERS[]> = this.service.support$;
  public total$: Observable<number> = this.service.total$;
  public Data: ORDERS[];
  public orderHistoryData = orderHistory;

  readonly headers = viewChildren(OdersdataDirective);

  ngOnInit() {
    this.products$.subscribe(res => {
      this.Data = res;
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach(header => {
      if (header.sortableOrder() !== column) {
        header.currentDirection.set('');
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
