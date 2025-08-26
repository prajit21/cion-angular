import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { supportDB } from '../../../shared/data/component/support-ticket/support-ticket';
import {
  NgbdSortableHeader2Directive,
  SortEvent,
} from '../../../shared/directives/support-ticket.directive';
import { SupportTicketService } from '../../../shared/services/support-ticket/support-ticket.service';

@Component({
  selector: 'app-support-ticket-data-table',
  imports: [NgbdSortableHeader2Directive, FormsModule, CommonModule, NgbPaginationModule],
  providers: [DecimalPipe, SupportTicketService],
  templateUrl: './support-ticket-data-table.html',
  styleUrls: ['./support-ticket-data-table.scss'],
})
export class SupportTicketDataTable {
  public service = inject(SupportTicketService);

  public countries$: Observable<supportDB[]> = this.service.support$;
  public total$: Observable<number> = this.service.total$;
  public Data: supportDB[];

  readonly headers = viewChildren(NgbdSortableHeader2Directive);

  ngOnInit() {
    this.countries$.subscribe(res => {
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
