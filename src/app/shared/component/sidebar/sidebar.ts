import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { LayoutService } from '../../services/layout/layout.service';
import { NavservicesService, Menu } from '../../services/nav/navservices.service';
import { SvgIcon } from '../svg-icon/svg-icon';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, SvgIcon, CommonModule, FormsModule, TranslateModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class Sidebar {
  public navService = inject(NavservicesService);
  public layout = inject(LayoutService);
  public menus = this.navService.Nvabarmenu;
  public mainMenu: boolean = false;
  public menuItem = {};
  public active: boolean = false;
  public screenWidth: number;
  public screenHeight: number;

  constructor() {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  toggleMenu(item: Menu) {
    if (!item.active) {
      this.menus.forEach((a: Menu) => {
        if (this.menus.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: Menu) => {
          if (a.children?.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
    if (item.active == true && item.type != 'link') {
      this.navService.isShow = true;
    } else {
      this.navService.isShow = false;
    }
  }

  toggle(item: Menu, mainMenu?: Menu) {
    if (!item.active) {
      this.menus.forEach((a: Menu) => {
        a.item?.forEach(child => {
          if (a.item?.includes(item)) {
            child.active = false;
          }
          if (child.children) {
            child.children.forEach(subChild => {
              if (child.children?.includes(item)) {
                subChild.active = false;
              }
            });
          }
        });
        return;
      });
    }
    item.active = !item.active;
    if (mainMenu) {
      mainMenu.active = false;
      this.navService.isShow = false;
    }
  }
}
