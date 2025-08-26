import { Component } from '@angular/core';

import { ChartWidget } from './chart-widget/chart-widget';
import { CryptoAnnotations } from './crypto-annotations/crypto-annotations';
import { CryptocurrencyPrices } from './cryptocurrency-prices/cryptocurrency-prices';
import { Finance } from './finance/finance';
import { LiveProducts } from './live-products/live-products';
import { MonthlyHistory } from './monthly-history/monthly-history';
import { MonthlySales } from './monthly-sales/monthly-sales';
import { OrderStatus } from './order-status/order-status';
import { OrderStatusChart } from './order-status-chart/order-status-chart';
import { SkillStatus } from './skill-status/skill-status';
import { StockMarket } from './stock-market/stock-market';
import { TrunOver } from './trun-over/trun-over';
import { UserChart } from './user-chart/user-chart';

@Component({
  selector: 'app-chart',
  imports: [
    ChartWidget,
    CryptocurrencyPrices,
    CryptoAnnotations,
    Finance,
    LiveProducts,
    MonthlyHistory,
    MonthlySales,
    OrderStatus,
    OrderStatusChart,
    SkillStatus,
    StockMarket,
    TrunOver,
    UserChart,
  ],
  templateUrl: './chart.html',
  styleUrls: ['./chart.scss'],
})
export class Chart {}
