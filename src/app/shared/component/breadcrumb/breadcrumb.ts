import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterModule,
} from '@angular/router';

import { map } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterModule],
  templateUrl: './breadcrumb.html',
  styleUrls: ['./breadcrumb.scss'],
})
export class Breadcrumb {
  public breadcrumbs?: { parentBreadcrumb?: string | null; childBreadcrumb?: string } | null;
  public title: string = '';

  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
      )
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {
        let title = route.snapshot.data['title'];
        let parent = route.parent?.snapshot.data['breadcrumb'];
        let child = route.snapshot.data['breadcrumb'];
        this.breadcrumbs = null;
        this.title = title;
        this.breadcrumbs = {
          parentBreadcrumb: parent,
          childBreadcrumb: child,
        };
      });
  }
}
