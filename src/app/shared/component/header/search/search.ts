import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Menu, NavservicesService } from '../../../../shared/services/nav/navservices.service';
import { ClickOutsideDirective } from '../../../directives/outside.directive';
import { SvgIcon } from '../../svg-icon/svg-icon';

@Component({
  selector: 'app-search',
  imports: [RouterModule, SvgIcon, FormsModule, CommonModule, ClickOutsideDirective],
  templateUrl: './search.html',
  styleUrls: ['./search.scss'],
})
export class Search {
  public menuItems: Menu[] = [];
  public items: Menu[] = [];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string = '';
  public open = false;

  public navServices = inject(NavservicesService);

  constructor() {
    this.navServices.items.subscribe(menuItems => (this.items = menuItems));
  }
  // menu open
  openMenu() {
    this.open = !this.open;
  }
  searchToggle() {
    this.navServices.search = false;
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

  clickOutside(): void {
    this.searchResult = false;
    this.searchResultEmpty = false;
    this.text = '';
    document.body.classList.remove('offcanvas');
  }
}
