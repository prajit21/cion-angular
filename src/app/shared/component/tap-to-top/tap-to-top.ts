import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';

import { Feathericon } from '../feathericon/feathericon';

@Component({
  selector: 'app-tap-to-top',
  imports: [Feathericon, CommonModule],
  templateUrl: './tap-to-top.html',
  styleUrls: ['./tap-to-top.scss'],
})
export class TapToTop {
  public show: boolean = false;
  private viewScroller = inject(ViewportScroller);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 600) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  topToTap() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}
