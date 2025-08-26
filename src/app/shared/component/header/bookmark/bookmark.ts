import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavservicesService, Menu } from '../../../../shared/services/nav/navservices.service';
import { ClickOutsideDirective } from '../../../directives/outside.directive';
import { SvgIcon } from '../../svg-icon/svg-icon';

@Component({
  selector: 'app-bookmark',
  imports: [RouterModule, FormsModule, CommonModule, SvgIcon, ClickOutsideDirective],
  templateUrl: './bookmark.html',
  styleUrls: ['./bookmark.scss'],
})
export class Bookmark {
  public menuItems: Menu[] = [];
  public items: Menu[] = [];
  public bookmarkItems: Menu[] = [];
  public text: string = '';
  public bookmarkFlip = false;
  public bookmark = false;
  public open = false;
  public searchResult = false;
  public searchResultEmpty = false;

  public navServices = inject(NavservicesService);

  ngOnInit(): void {
    this.navServices.items.subscribe((menuItems: Menu[]) => {
      this.items = menuItems;
      this.items.forEach(data => {
        data.item?.filter(menuItems => {
          if (menuItems.bookmark) {
            this.bookmarkItems.push(menuItems);
          }
          if (!menuItems.children) return false;
          menuItems.children.filter(subItems => {
            if (subItems.bookmark) {
              this.bookmarkItems.push(subItems);
            }
          });
          return;
        });
      });
    });
  }

  ToggleSearch() {
    this.open = !this.open;
    this.removeFix();
  }

  openBookMark() {
    this.bookmark = !this.bookmark;
  }

  flipBookMark() {
    this.bookmarkFlip = !this.bookmarkFlip;
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
        return (this.menuItems = items);
      });
    });
    return;
  }

  openBookmarkSearch() {
    this.open = !this.open;
    this.removeFix();
  }

  checkSearchResultEmpty(items: Menu[]) {
    if (!items.length) this.searchResultEmpty = true;
    else this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    var addFix = document.getElementById('#canvas-bookmark');
    addFix?.classList.add('offcanvas-bookmark');
  }

  removeFix() {
    this.searchResult = false;
    this.text = '';
    var removeFix = document.getElementById('#canvas-bookmark');
    removeFix?.classList.add('offcanvas-bookmark');
  }

  addToBookmark(items: Menu) {
    const index = this.bookmarkItems.indexOf(items);
    if (index === -1 && !items.bookmark) {
      items.bookmark = true;
      this.bookmarkItems.push(items);

      this.text = '';
    } else {
      this.bookmarkItems.splice(index, 1);
      items.bookmark = false;
    }
  }

  clickOutside(): void {
    this.searchResult = false;
    this.searchResultEmpty = false;
  }
}
