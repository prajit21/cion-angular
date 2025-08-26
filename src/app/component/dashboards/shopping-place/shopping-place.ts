import { Component } from '@angular/core';

import { ActivityTimeline } from './activity-timeline/activity-timeline';
import { Earning } from './earning/earning';
import { Invoice } from './invoice/invoice';
import { NewProduct } from './new-product/new-product';
import { RecentOrders } from './recent-orders/recent-orders';
import { SaleOffer } from './sale-offer/sale-offer';
import { SaleProduct } from './sale-product/sale-product';
import { Sales } from './sales/sales';
import { SalesSummary } from './sales-summary/sales-summary';
import { TopCountries } from './top-countries/top-countries';
import { TopSeller } from './top-seller/top-seller';
import { Visitors } from './visitors/visitors';

@Component({
  selector: 'app-shopping-place',
  imports: [
    Earning,
    Sales,
    Visitors,
    RecentOrders,
    TopSeller,
    NewProduct,
    TopCountries,
    ActivityTimeline,
    SalesSummary,
    SaleOffer,
    Invoice,
    SaleProduct,
  ],
  templateUrl: './shopping-place.html',
  styleUrls: ['./shopping-place.scss'],
})
export class ShoppingPlace {}
