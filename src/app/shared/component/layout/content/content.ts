import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import * as feather from 'feather-icons';

import { NavservicesService } from '../../../../shared/services/nav/navservices.service';
import { HideNavScrollService } from '../../../services/hide-nav-scroll.service';
import { LayoutService } from '../../../services/layout/layout.service';
import { Breadcrumb } from '../../breadcrumb/breadcrumb';
import { Customizer } from '../../customizer/customizer';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { Sidebar } from '../../sidebar/sidebar';

@Component({
  selector: 'app-content',
  imports: [Header, Breadcrumb, Footer, Customizer, CommonModule, RouterModule, Sidebar],
  templateUrl: './content.html',
  styleUrls: ['./content.scss'],
})
export class Content {
  public isShow: boolean = false;
  public urrentRoute!: string;
  public urlPath!: string;
  public innerWidth!: number;

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 1200) {
      this.layout.config.settings.sidebar_type = 'compact-sidebar compact-small material-icon';
    }
  }

  public navService: NavservicesService = inject(NavservicesService);
  public layout: LayoutService = inject(LayoutService);
  public hidenav: HideNavScrollService = inject(HideNavScrollService);
  private router: Router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this.router.url;
    this.innerWidth = window.innerWidth;
  }

  ngAfterViewInit() {
    feather.replace();
  }

  get layoutClass() {
    return (
      this.layout.config.settings.sidebar_type +
      ' ' +
      this.layout.config.settings.layout.replace('layout', 'sidebar')
    );
  }
}
