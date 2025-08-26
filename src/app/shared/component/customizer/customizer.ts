import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ColorPicker } from './color-picker/color-picker';
import { QuickOption } from './quick-option/quick-option';
import { LayoutService } from '../../services/layout/layout.service';

@Component({
  selector: 'app-customizer',
  imports: [ColorPicker, QuickOption, CommonModule],
  templateUrl: './customizer.html',
  styleUrls: ['./customizer.scss'],
})
export class Customizer {
  public customizer: string = '';
  public sidebarType: string = 'compact-wrapper';
  public sidebarSetting: string = 'default-sidebar';
  public screenwidth: number = window.innerWidth;
  public layoutType: string = 'ltr';
  public primary_color: string = '#6362E7';
  public secondary_color: string = '#FFC500';

  private modalService = inject(NgbModal);
  public layoutService = inject(LayoutService);

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    this.screenwidth = event.target.innerWidth;
  }

  Customizer(val: string) {
    this.layoutService.customizer = val;
  }

  openModal(popup: TemplateRef<NgbModal>) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
  }

  applyColor() {
    document.documentElement.style.setProperty('--theme-default', this.primary_color);
    document.documentElement.style.setProperty('--theme-secondary', this.secondary_color);
    this.layoutService.config.color.primary_color = this.primary_color;
    this.layoutService.config.color.secondary_color = this.secondary_color;
  }

  customizeSidebarType(val: string) {
    this.sidebarType = val;
  }

  copyText(data: object) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
