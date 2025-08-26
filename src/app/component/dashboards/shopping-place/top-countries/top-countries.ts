import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LeafletModule } from '@bluehalo/ngx-leaflet';
import * as L from 'leaflet';

import { contriesdetils } from '../../../../shared/data/component/deshboard/shopping-place';

@Component({
  selector: 'app-top-countries',
  imports: [LeafletModule, CommonModule],
  templateUrl: './top-countries.html',
  styleUrls: ['./top-countries.scss'],
})
export class TopCountries {
  public contriesData = contriesdetils;

  //First map options
  options1 = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909),
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
      'Open Cycle Map': L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    },
    overlays: {
      'Big Circle': L.circle([46.95, -122], { radius: 5000 }),
      'Big Square': L.polygon([
        [46.8, -121.55],
        [46.9, -121.55],
        [46.9, -121.7],
        [46.8, -121.7],
      ]),
    },
  };
}
