import { CommonModule } from '@angular/common';
import { Component, SimpleChanges, input } from '@angular/core';

import { ProfileData } from './profile-data/profile-data';
import * as data from '../../../shared/data/component/contacts/all-contact';

@Component({
  selector: 'app-personal',
  imports: [ProfileData, CommonModule],
  templateUrl: './personal.html',
  styleUrls: ['./personal.scss'],
})
export class Personal {
  public Personal = data.Personal;
  public Organization = data.Organization;
  readonly selectedId = input<number>();
  readonly statusData = input<boolean>();
  readonly getTitleData = input<string>();
  public getTaskData: data.contactData;
  public lastData: data.lastDataList;
  public editContact: boolean = false;
  public open: boolean = false;
  public selectedItem: string | null = null;

  ngOnInit() {
    this.Personal.map(data => {
      if (data.status) {
        this.getTaskData = data;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let ipersnol_Id = changes['selectedId']?.currentValue;
    this.Personal.map(data => {
      if (data.title_id === ipersnol_Id) {
        this.getTaskData = data;
      }
    });

    let getTitle = changes['getTitleData']?.currentValue;
    this.Personal.map(data => {
      if (data.title === getTitle) {
        this.getTaskData = data;
      }
    });

    let oragnization_Id = changes['selectedId']?.currentValue;
    this.Organization.map(data => {
      if (data.title_id === oragnization_Id) {
        this.getTaskData = data;
      }
    });
  }

  changeData(list: data.lastDataList) {
    this.lastData = list;
    if (!list.status) {
      this.getTaskData.data.forEach((a: data.lastDataList) => {
        a.status = false;
      });
    }
    list.status = !list.status;
  }

  openHistory() {
    this.open = !this.open;
  }
}
