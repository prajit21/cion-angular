import { Directive, HostBinding, HostListener, Input, input, output, signal } from '@angular/core';

import { ORDERS } from '../interface/odershistory';

export type SortColumn = keyof ORDERS | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[orderSortable]',
  standalone: true,
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class OdersdataDirective {
  readonly sortableOrder = input<SortColumn>('');
  readonly direction = input<SortDirection>('');

  public currentDirection = signal<SortDirection>(this.direction());

  readonly sort = output<SortEvent>();

  @HostBinding('class.asc') get isAsc() {
    return this.currentDirection() === 'asc';
  }

  @HostBinding('class.desc') get isDesc() {
    return this.currentDirection() === 'desc';
  }

  @HostListener('click')
  rotateColumn() {
    this.currentDirection.set(rotate[this.currentDirection()]);
    this.sort.emit({ column: this.sortableOrder(), direction: this.currentDirection() });
  }
}
