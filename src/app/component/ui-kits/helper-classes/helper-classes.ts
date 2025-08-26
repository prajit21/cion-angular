import { Component } from '@angular/core';

import { BackgroundColors } from './background-colors/background-colors';
import { BorderColor } from './border-color/border-color';
import { BorderStyle } from './border-style/border-style';
import { BordersDisplays } from './borders-displays/borders-displays';
import { FontSizes } from './font-sizes/font-sizes';
import { FontStyle } from './font-style/font-style';
import { FontWeights } from './font-weights/font-weights';
import { ImagesSizes } from './images-sizes/images-sizes';
import { TextColors } from './text-colors/text-colors';

@Component({
  selector: 'app-helper-classes',
  imports: [
    BorderStyle,
    BordersDisplays,
    BackgroundColors,
    BorderColor,
    ImagesSizes,
    FontStyle,
    FontWeights,
    TextColors,
    FontSizes,
  ],
  templateUrl: './helper-classes.html',
  styleUrls: ['./helper-classes.scss'],
})
export class HelperClasses {}
