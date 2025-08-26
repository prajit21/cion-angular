import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import {
  NgbdSortableHeaderDirective,
  SortEvent,
} from '../../../shared/directives/sortable.directive';
import { supportDB } from '../../../shared/interface/support';
import { TableService } from '../../../shared/services/table/table.service';

@Component({
  selector: 'app-data-table',
  imports: [
    CommonModule,
    FormsModule,
    NgbdSortableHeaderDirective,
    NgbPaginationModule,
    NgbTypeaheadModule,
  ],
  templateUrl: './data-table.html',
  styleUrls: ['./data-table.scss'],
  providers: [TableService, DecimalPipe],
})
export class DataTable {
  public service = inject(TableService);

  public tableData$: Observable<supportDB[]> = this.service.supportdata$;
  public total$: Observable<number> = this.service.total$;
  public Data: supportDB[];

  readonly headers = viewChildren(NgbdSortableHeaderDirective);

  ngOnInit() {
    this.tableData$.subscribe(res => {
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

  deleteData(id: number) {
    this.tableData$.subscribe((data: supportDB[]) => {
      data.map((elem: supportDB) => {
        elem.id == id && data.splice(id, 1);
      });
    });
  }
}
