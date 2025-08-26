import { Component, HostListener, inject, ViewEncapsulation } from '@angular/core';

import { HideNavScrollService } from '../../../shared/services/hide-nav-scroll.service';

@Component({
  selector: 'app-hidenav-scroll',
  imports: [],
  templateUrl: './hidenav-scroll.html',
  styleUrls: ['./hidenav-scroll.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HidenavScroll {
  public show: boolean = false;

  public hidenav = inject(HideNavScrollService);
  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 400) {
      this.hidenav.show = true;
    } else {
      this.hidenav.show = false;
    }
  }
}
