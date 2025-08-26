import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexMarkers,
  ApexTooltip,
} from 'ng-apexcharts';

export interface BalanceChartOptions {
  series: ApexAxisChartSeries;
  grid: ApexGrid;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
  fill: ApexFill;
  legend: ApexLegend;
  responsive?: ApexResponsive[];
}

export interface SalesAnalyticsChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  colors: string[];
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  grid: ApexGrid;
  legend: ApexLegend;
  tooltip?: ApexTooltip;
}

export interface CustomerChat {
  series: number[];
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  colors: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
}
