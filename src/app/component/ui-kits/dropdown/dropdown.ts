import { Component } from '@angular/core';

import { Alignments } from './alignments/alignments';
import { BasicDropdown } from './basic-dropdown/basic-dropdown';
import { DarkDropdown } from './dark-dropdown/dark-dropdown';
import { DividerDropdown } from './divider-dropdown/divider-dropdown';
import { DropdownSizing } from './dropdown-sizing/dropdown-sizing';
import { HeadingDropdown } from './heading-dropdown/heading-dropdown';
import { HelperCard } from './helper-card/helper-card';
import { InputTypeDropdown } from './input-type-dropdown/input-type-dropdown';
import { JustifyContentsDropdown } from './justify-contents-dropdown/justify-contents-dropdown';
import { RoundedDropdown } from './rounded-dropdown/rounded-dropdown';
import { SplitDropdown } from './split-dropdown/split-dropdown';
import { UniqueDropdown } from './unique-dropdown/unique-dropdown';

@Component({
  selector: 'app-dropdown',
  imports: [
    BasicDropdown,
    RoundedDropdown,
    SplitDropdown,
    HeadingDropdown,
    InputTypeDropdown,
    DarkDropdown,
    UniqueDropdown,
    JustifyContentsDropdown,
    Alignments,
    HelperCard,
    DividerDropdown,
    DropdownSizing,
  ],
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.scss'],
})
export class Dropdown {}
