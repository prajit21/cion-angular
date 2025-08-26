import { Component } from '@angular/core';

import { ActiveDisabledPagination } from './active-disabled-pagination/active-disabled-pagination';
import { AlignmentPagination } from './alignment-pagination/alignment-pagination';
import { DefaultPagination } from './default-pagination/default-pagination';
import { IconPagination } from './icon-pagination/icon-pagination';
import { PaginationSizing } from './pagination-sizing/pagination-sizing';
import { RoundedPagination } from './rounded-pagination/rounded-pagination';

@Component({
  selector: 'app-paginations',
  imports: [
    ActiveDisabledPagination,
    AlignmentPagination,
    DefaultPagination,
    IconPagination,
    PaginationSizing,
    RoundedPagination,
  ],
  templateUrl: './paginations.html',
  styleUrls: ['./paginations.scss'],
})
export class Paginations {}
