import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LayoutService } from '../../../services/layout/layout.service';

@Component({
  selector: 'app-color-picker',
  imports: [FormsModule, CommonModule],
  templateUrl: './color-picker.html',
  styleUrls: ['./color-picker.scss'],
})
export class ColorPicker {
  public primary: string = '#33BFBF';
  public secondary: string = '#FF6150';
  public MIXLayout: string = 'default';

  public primary_color = localStorage.getItem('primary_color') || '#24695c';
  public secondary_color = localStorage.getItem('secondary_color') || '#FF6150';
  private layout = inject(LayoutService);

  constructor() {
    document.documentElement.style.setProperty(
      '--theme-default',
      localStorage.getItem('primary_color'),
    );
    document.documentElement.style.setProperty(
      '--theme-secondary',
      localStorage.getItem('secondary_color'),
    );
    var primary = localStorage.getItem('primary_color') || this.layout.config.color.secondary_color;
    var secondary =
      localStorage.getItem('secondary_color') || this.layout.config.color.secondary_color;
    this.layout.config.color.primary_color = primary;
    this.layout.config.color.secondary_color = secondary;
    localStorage.getItem('primary_color') || this.layout.config.color.primary_color;
    localStorage.getItem('secondary_color') || this.layout.config.color.secondary_color;
  }

  applyColor() {
    localStorage.setItem('primary_color', this.primary_color);
    localStorage.setItem('secondary_color', this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
    window.location.reload();
  }

  resetColor() {
    document.documentElement.style.setProperty('--theme-default', '#24695c');
    document.documentElement.style.setProperty('--theme-secondary', '#ba895d');
    (<HTMLInputElement>document.getElementById('ColorPicker1')).value = '#24695c';
    (<HTMLInputElement>document.getElementById('ColorPicker2')).value = '#ba895d';
    this.layout.config.color.primary_color = '#24695c';
    this.layout.config.color.secondary_color = '#ba895d';
  }

  customizeMixLayout(val: string) {
    this.MIXLayout = val;
    this.layout.config.settings.layout_version = val;
    document.body?.classList.remove('light-only', 'dark-sidebar', 'dark-only');
    if (val === 'default') {
      document.body?.classList.add('light-only');
    } else if (val === 'dark-sidebar') {
      document.body?.classList.add('dark-sidebar');
    } else {
      document.body?.classList.add('dark-only');
    }
  }
}
