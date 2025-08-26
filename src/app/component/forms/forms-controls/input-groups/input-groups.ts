import { Component } from '@angular/core';

import { BasicInputGroups } from './basic-input-groups/basic-input-groups';
import { ButtonAddons } from './button-addons/button-addons';
import { ButtonsDropdowns } from './buttons-dropdowns/buttons-dropdowns';
import { CheckboxesRadios } from './checkboxes-radios/checkboxes-radios';
import { CustomFileInput } from './custom-file-input/custom-file-input';
import { CustomForms } from './custom-forms/custom-forms';
import { MultipleInputs } from './multiple-inputs/multiple-inputs';
import { SegmentedButtons } from './segmented-buttons/segmented-buttons';
import { Sizing } from './sizing/sizing';
import { VariationOfAddons } from './variation-of-addons/variation-of-addons';

@Component({
  selector: 'app-input-groups',
  imports: [
    ButtonAddons,
    CustomFileInput,
    ButtonsDropdowns,
    CustomForms,
    SegmentedButtons,
    CheckboxesRadios,
    Sizing,
    MultipleInputs,
    BasicInputGroups,
    VariationOfAddons,
  ],
  templateUrl: './input-groups.html',
  styleUrls: ['./input-groups.scss'],
})
export class InputGroups {}
