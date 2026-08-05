import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NavservicesService } from '../../services/nav/navservices.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./footer.scss'],
})
export class Footer {
  public footerFix = false;
  public footerLight = false;
  public footerDark = false;

  public navService = inject(NavservicesService);

  public currentYear = new Date().getFullYear();

  ngDoCheck() {
    if (window.location.pathname == '/page-layout/footer-dark') {
      this.footerDark = true;
      this.footerLight = false;
      this.footerFix = false;
    } else if (window.location.pathname == '/page-layout/footer-light') {
      this.footerLight = true;
      this.footerDark = false;
      this.footerFix = false;
    } else if (window.location.pathname == '/page-layout/footer-fixed') {
      this.footerFix = true;
      this.footerLight = false;
      this.footerDark = false;
    }
  }
}
