import { Component } from '@angular/core';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

import { AudioTesting } from './audio-testing/audio-testing';
import { MeetUp } from './meet-up/meet-up';
import { Resolutions } from './resolutions/resolutions';

@Component({
  selector: 'app-timeline-chart',
  imports: [AudioTesting, MeetUp, Resolutions, CarouselModule],
  templateUrl: './timeline-chart.html',
  styleUrls: ['./timeline-chart.scss'],
})
export class TimelineChart {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
