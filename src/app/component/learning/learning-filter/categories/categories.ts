import { Component } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { Categorie } from '../../../../shared/data/component/learning/learning';

@Component({
  selector: 'app-categories',
  imports: [NgbCollapseModule],
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss'],
})
export class Categories {
  public isCollapsed = false;
  public Categories = Categorie;
}
