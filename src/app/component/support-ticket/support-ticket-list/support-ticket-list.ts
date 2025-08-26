import { Component } from '@angular/core';

import { ticketListStatus } from '../../../shared/data/component/support-ticket/support-ticket';

@Component({
  selector: 'app-support-ticket-list',
  imports: [],
  templateUrl: './support-ticket-list.html',
  styleUrls: ['./support-ticket-list.scss'],
})
export class SupportTicketList {
  public ticketData = ticketListStatus;
}
