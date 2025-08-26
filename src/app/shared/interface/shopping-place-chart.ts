import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexPlotOptions,
  ApexResponsive,
  ApexFill,
  ApexGrid,
  ApexAnnotations,
  ApexNonAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexTooltip,
  ApexLegend,
} from 'ng-apexcharts';

export interface EarningChartOptions {
  series: ApexAxisChartSeries;
  colors: string[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  fill?: ApexFill;
  grid?: ApexGrid;
}

export interface SalesChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  colors: string[];
  fill: ApexFill;
  stroke: ApexStroke;
  annotations?: ApexAnnotations;
  responsive: ApexResponsive[];
  grid?: ApexGrid;
}

export interface RadialChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  labels: string[];
  stroke: ApexStroke;
  grid: ApexGrid;
  colors: string[];
  responsive?: ApexResponsive[];
}

export interface AreaChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  legend?: ApexLegend;
  plotOptions?: ApexPlotOptions;
  grid?: ApexGrid;
  colors: string[];
  responsive?: ApexResponsive[];
}

export interface LineChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
  responsive: ApexResponsive[];
  fill: ApexFill;
  tooltip: ApexTooltip;
  legend: ApexLegend;
}
