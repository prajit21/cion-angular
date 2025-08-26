import { Component } from '@angular/core';

import { AnimatedButtons } from './animated-buttons/animated-buttons';
import { BasicRadioCheckbox } from './basic-radio-checkbox/basic-radio-checkbox';
import { CustomCheckbox } from './custom-checkbox/custom-checkbox';
import { CustomRadio } from './custom-radio/custom-radio';
import { DefaultCheckbox } from './default-checkbox/default-checkbox';
import { DefaultRadio } from './default-radio/default-radio';
import { DefaultSwitches } from './default-switches/default-switches';
import { ImagesCheckbox } from './images-checkbox/images-checkbox';
import { ImagesRadio } from './images-radio/images-radio';
import { InlineInputTypes } from './inline-input-types/inline-input-types';
import { OutlinedCheckboxStyles } from './outlined-checkbox-styles/outlined-checkbox-styles';
import { RadioToggleButtons } from './radio-toggle-buttons/radio-toggle-buttons';

@Component({
  selector: 'app-checkbox-radio',
  imports: [
    DefaultCheckbox,
    CustomCheckbox,
    DefaultRadio,
    ImagesCheckbox,
    ImagesRadio,
    CustomRadio,
    DefaultSwitches,
    InlineInputTypes,
    AnimatedButtons,
    BasicRadioCheckbox,
    RadioToggleButtons,
    OutlinedCheckboxStyles,
  ],
  templateUrl: './checkbox-radio.html',
  styleUrls: ['./checkbox-radio.scss'],
})
export class CheckboxRadio {}
