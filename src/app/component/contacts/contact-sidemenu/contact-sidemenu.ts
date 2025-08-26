import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import * as data from '../../../shared/data/component/contacts/all-contact';
import { AddCategory } from '../modal/add-category/add-category';
import { NewContact } from '../modal/new-contact/new-contact';
import { Personal } from '../personal/personal';

@Component({
  selector: 'app-contact-sidemenu',
  imports: [Feathericon, Personal],
  templateUrl: './contact-sidemenu.html',
  styleUrls: ['./contact-sidemenu.scss'],
  standalone: true,
})
export class ContactSidemenu {
  selectedId!: number;
  statusData!: boolean;
  getTitleData!: string;
  titleData!: string;

  public Personal = data.Personal;
  public organization = data.Organization;
  public viewList = data.viewList;
  public open = false;
  public lastData: data.lastDataList;

  private modalService = inject(NgbModal);

  ngOnInit() {
    const getStatusdata = this.Personal.find(d => d.status === true);
    if (getStatusdata) {
      this.statusData = getStatusdata.status;
    }
  }

  newContacts() {
    this.modalService.open(NewContact, { size: 'lg' });
  }

  addCategory() {
    this.modalService.open(AddCategory, { size: 'sm' });
  }

  changeData(list: number, title: string) {
    const getId = this.Personal.find(x => x.title_id === list);
    if (getId) {
      this.selectedId = getId.title_id;
    }

    const getTitle = this.Personal.find(x => x.title === title);
    if (getTitle) {
      this.titleData = getTitle.title;
      this.getTitleData = getTitle.title;
    }
  }

  changeData1(list: number) {
    const getId = this.organization.find(x => x.title_id === list);
    if (getId) {
      this.selectedId = getId.title_id;
    }
  }

  openMenu() {
    this.open = !this.open;
  }
}
