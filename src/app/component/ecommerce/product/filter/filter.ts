import { Component, inject } from '@angular/core';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

import { filterData } from '../../../../shared/data/component/e-commerce/product';

@Component({
  selector: 'app-filter',
  imports: [NgxSliderModule, CarouselModule],
  templateUrl: './filter.html',
  styleUrls: ['./filter.scss'],
})
export class Filter {
  public filter = filterData;
  public rateing = 5;
  public openSidebar: boolean = false;
  public value2: number = 200;
  public maxvalue: number = 800;

  private config = inject(NgbRatingConfig);

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }

  customOptions: OwlOptions = {
    items: 1,
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
  };

  options: Options = {
    floor: 0,
    ceil: 1000,
  };

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }
}
