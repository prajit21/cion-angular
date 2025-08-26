import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NavservicesService } from '../../services/nav/navservices.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {
  public footerFix = false;
  public footerLight = false;
  public footerDark = false;

  public navService = inject(NavservicesService);

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
