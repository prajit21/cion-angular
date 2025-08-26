import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-defaultselect2',
  imports: [NgSelectModule, FormsModule],
  templateUrl: './defaultselect2.html',
  styleUrls: ['./defaultselect2.scss'],
})
export class Defaultselect2 {
  public selectedCity!: string;
  public selectedCityIds: string[] = [];
  public selectedCityIds3: string[] = [];
  public selectedCityIds2: string[] = [];
  public selectedCityIds4: string[] = [];
  public selectedCityIds5: string[] = [];
  public selectedCityIds6: string[] = [];
  public selectedCityName = 'Vilnius';
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];

  store: boolean = true;
  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];

  Placeholder = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];
  Placeh = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];

  Enable(val: boolean): void {
    this.store = val;
  }
}
