import { Component, inject, Output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { allBookmarkData, tagData } from '../../../shared/data/component/bookmark/bookmarks';
import { BookmarkData } from '../bookmark-data/bookmark-data';
import { AddTag } from '../modal/add-tag/add-tag';
import { NewBookmark } from '../modal/new-bookmark/new-bookmark';

@Component({
  selector: 'app-side-menu',
  imports: [Feathericon, BookmarkData],
  templateUrl: './side-menu.html',
  styleUrls: ['./side-menu.scss'],
})
export class SideMenu {
  @Output() selectedheading_id: number;
  @Output() selectegTagId: number;
  public open: boolean = false;
  public BookmarkData = allBookmarkData;
  public tag = tagData;

  private modalService = inject(NgbModal);

  openMenu() {
    this.open = !this.open;
  }

  openAddBookmark() {
    this.modalService.open(NewBookmark, { size: 'lg' });
  }

  openAddTag() {
    this.modalService.open(AddTag, { size: 'lg' });
  }

  getData(title_id: number) {
    const getHeadingData = this.BookmarkData.filter(data => {
      return data.title_id === title_id;
    });
    this.selectedheading_id = getHeadingData[0].title_id!;
  }

  getTagData(title_id: number) {
    const getHeadingData = this.tag.filter(data => {
      return data.title_id === title_id;
    });
    this.selectegTagId = getHeadingData[0].title_id!;
  }
}
