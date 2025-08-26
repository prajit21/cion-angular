import { Component } from '@angular/core';

import { ActiveLists } from './active-lists/active-lists';
import { ContextualClasses } from './contextual-classes/contextual-classes';
import { CustomContentLists } from './custom-content-lists/custom-content-lists';
import { DefaultLists } from './default-lists/default-lists';
import { DisabledLists } from './disabled-lists/disabled-lists';
import { FlushLists } from './flush-lists/flush-lists';
import { HorizontalLists } from './horizontal-lists/horizontal-lists';
import { JavaScriptBehavior } from './java-script-behavior/java-script-behavior';
import { ListsCheckbox } from './lists-checkbox/lists-checkbox';
import { ListsNumbers } from './lists-numbers/lists-numbers';
import { ListsRadios } from './lists-radios/lists-radios';
import { NumberedBadgeLists } from './numbered-badge-lists/numbered-badge-lists';
import { ScrollableLists } from './scrollable-lists/scrollable-lists';

@Component({
  selector: 'app-lists',
  imports: [
    DefaultLists,
    ActiveLists,
    FlushLists,
    ContextualClasses,
    HorizontalLists,
    CustomContentLists,
    ListsCheckbox,
    ListsRadios,
    ListsNumbers,
    JavaScriptBehavior,
    NumberedBadgeLists,
    DisabledLists,
    ScrollableLists,
  ],
  templateUrl: './lists.html',
  styleUrls: ['./lists.scss'],
})
export class Lists {}
