import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LayoutService } from '../../../services/layout/layout.service';

@Component({
  selector: 'app-quick-option',
  imports: [FormsModule, CommonModule],
  templateUrl: './quick-option.html',
  styleUrls: ['./quick-option.scss'],
})
export class QuickOption {
  public layoutType: string = 'ltr';
  public sidebarType: string = 'material-icon';
  public screenwidth = window.innerWidth;
  public icon: string = 'stroke-svg';

  private layout = inject(LayoutService);

  // Customize Layout Type

  customizeLayoutType(val: string) {
    this.layoutType = val;
    this.layout.config.settings.layout_type = val;
    if (val == 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body.className = 'rtl';
    } else if (val == 'box-layout') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body.className = 'box-layout';
    } else {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      document.body.className = '';
    }
  }

  customizeSidebarType(val: string) {
    if (this.screenwidth < 1200) {
      if (val == 'horizontal-wrapper') {
        this.layout.config.settings.sidebar_type = 'compact-sidebar compact-small material-icon';
      }
    } else {
      this.sidebarType = val;
      this.layout.config.settings.sidebar_type = val;
      this.layout.customizer = '';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    this.screenwidth = event.target.innerWidth;
  }

  svgIcon(val: string) {
    this.icon = val;
    this.layout.config.settings.icon = val;
    if (val == 'stroke-svg') {
      document.getElementsByTagName('page-sub-header')[0]?.setAttribute('icon', val);
    } else {
      document.getElementsByTagName('page-sub-header')[0]?.setAttribute('icon', val);
    }
  }
}
