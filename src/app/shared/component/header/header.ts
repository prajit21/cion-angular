import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClickOutsideDirective } from '../../directives/outside.directive';
import { HideNavScrollService } from '../../services/hide-nav-scroll.service';
import { Menu, NavservicesService } from '../../services/nav/navservices.service';
import { SvgIcon } from '../svg-icon/svg-icon';
import { Bookmark } from './bookmark/bookmark';
import { Cart } from './cart/cart';
import { Language } from './language/language';
import { Message } from './message/message';
import { Notification } from './notification/notification';
import { Profile } from './profile/profile';
import { Search } from './search/search';
import { Theme } from './theme/theme';

@Component({
  selector: 'app-header',
  imports: [
    Search,
    Notification,
    Bookmark,
    Message,
    Cart,
    Theme,
    Language,
    ClickOutsideDirective,
    Profile,
    SvgIcon,
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  public text: string = '';
  public items: Menu[] = [];
  public open: boolean = false;
  public menuItems: Menu[] = [];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public navService = inject(NavservicesService);
  public hidenav = inject(HideNavScrollService);

  @HostListener('window:resize')
  onResize() {
    this.navService.isDisplay = window.innerWidth < 1200;
  }

  constructor() {
    this.navService.items.subscribe(menuItems => (this.items = menuItems));
  }

  openSearch() {
    this.open = !this.open;
  }

  openMenu() {
    this.navService.isDisplay = !this.navService.isDisplay;
  }

  languageToggle() {
    this.navService.language = !this.navService.language;
  }

  searchToggle() {
    this.navService.search = false;
    document.getElementsByTagName('body')[0].classList.remove('offcanvas');
  }

  searchTerm(term: string) {
    term ? this.addFix() : this.removeFix();
    if (!term) return (this.menuItems = []);
    let items: Menu[] = [];
    term = term.toLowerCase();
    this.items.forEach(data => {
      data.item?.filter(menuItems => {
        if (menuItems.title?.toLowerCase().includes(term) && menuItems.type === 'link') {
          items.push(menuItems);
        }
        menuItems.children?.filter(subItems => {
          if (subItems.title?.toLowerCase().includes(term) && subItems.type === 'link') {
            subItems.icon = menuItems.icon;
            items.push(subItems);
          }
          subItems.children?.filter(suSubItems => {
            if (suSubItems.title?.toLowerCase().includes(term)) {
              suSubItems.icon = menuItems.icon;
              items.push(suSubItems);
            }
          });
          return;
        });
        this.checkSearchResultEmpty(items);
        this.menuItems = items;
      });
    });
    return;
  }

  clickOutside(): void {
    this.searchResult = false;
    this.searchResultEmpty = false;
    this.text = '';
  }

  checkSearchResultEmpty(items: Menu[]) {
    if (!items.length) this.searchResultEmpty = true;
    else this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.body.classList.add('offcanvas');
  }

  removeFix() {
    this.searchResult = false;
    this.text = '';
    document.body.classList.remove('offcanvas');
  }
}
