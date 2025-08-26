import { CommonModule } from '@angular/common';
import { Component, SimpleChanges, input, viewChild } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import {
  Allbookmark,
  allBookmarkData,
  bookmarkDataInterface,
  tagData,
} from '../../../shared/data/component/bookmark/bookmarks';
import { EditBookmark } from '../modal/edit-bookmark/edit-bookmark';

@Component({
  selector: 'app-bookmark-data',
  imports: [Feathericon, CommonModule, EditBookmark],
  templateUrl: './bookmark-data.html',
  styleUrls: ['./bookmark-data.scss'],
})
export class BookmarkData {
  readonly selectedheading_id = input<number>();
  readonly selectegTagId = input<number>();

  public BookmarkData = allBookmarkData;
  public tag = tagData;
  public getBookmarkData: Allbookmark;
  public listBookmark: boolean = false;
  public editBookmarkData: bookmarkDataInterface[];
  public bookmarkData: bookmarkDataInterface[] = [];
  public favouriteData: bookmarkDataInterface[];

  readonly EditBookmarkModal = viewChild<EditBookmark>('editBookmarkModal');

  ngOnInit(): void {
    this.BookmarkData.map(data => {
      if (data.status) {
        this.getBookmarkData = data;
        for (let i of data.data) {
          this.bookmarkData.push(i);
        }
      }
    });
  }

  changegrid() {
    this.listBookmark = false;
  }
  changelist() {
    this.listBookmark = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    let id = changes['selectedheading_id']?.currentValue;
    this.BookmarkData.map(data => {
      if (data.title_id === id) {
        this.getBookmarkData = data;
      }
    });

    let tagId = changes['selectegTagId']?.currentValue;

    this.tag.map(data => {
      if (data.title_id === tagId) {
        this.getBookmarkData = data;
      }
    });
  }

  modal(id: number) {
    const a = this.bookmarkData.filter(data => {
      return data.id === id;
    });
    this.editBookmarkData = a;
    this.EditBookmarkModal()?.openModal(this.editBookmarkData);
  }

  favourite(id: number) {
    this.favouriteData = this.BookmarkData[0].data.filter(data => {
      return data.id === id;
    });
    this.favouriteData[0].favourite = !this.favouriteData[0].favourite;
  }
}
