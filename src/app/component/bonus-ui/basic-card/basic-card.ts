import { Component } from '@angular/core';

import { DarkCard } from './dark-card/dark-card';
import { FlatCard } from './flat-card/flat-card';
import { IconHeading } from './icon-heading/icon-heading';
import { InfoColorBody } from './info-color-body/info-color-body';
import { InfoColorFooter } from './info-color-footer/info-color-footer';
import { InfoColorHeader } from './info-color-header/info-color-header';
import { SimpleCard } from './simple-card/simple-card';
import { WithoutShadowCard } from './without-shadow-card/without-shadow-card';

@Component({
  selector: 'app-basic-card',
  imports: [
    DarkCard,
    FlatCard,
    IconHeading,
    InfoColorHeader,
    InfoColorBody,
    InfoColorFooter,
    SimpleCard,
    WithoutShadowCard,
  ],
  templateUrl: './basic-card.html',
  styleUrls: ['./basic-card.scss'],
})
export class BasicCard {}
