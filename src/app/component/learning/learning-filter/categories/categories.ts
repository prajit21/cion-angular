import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { Categorie } from '../../../../shared/data/component/learning/learning';

@Component({
  selector: 'app-categories',
  imports: [NgbCollapseModule],
  templateUrl: './categories.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./categories.scss'],
})
export class Categories {
  public isCollapsed = false;
  public Categories = Categorie;
}
