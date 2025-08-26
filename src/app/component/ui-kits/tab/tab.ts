import { Component } from '@angular/core';

import { BorderTabs } from './border-tabs/border-tabs';
import { IconTabs } from './icon-tabs/icon-tabs';
import { JustifyTabs } from './justify-tabs/justify-tabs';
import { MaterialStyleLeftTabs } from './material-style-left-tabs/material-style-left-tabs';
import { MaterialStyleTabs } from './material-style-tabs/material-style-tabs';
import { PillsTabs } from './pills-tabs/pills-tabs';
import { SimpleTabs } from './simple-tabs/simple-tabs';
import { VerticalTabs } from './vertical-tabs/vertical-tabs';

@Component({
  selector: 'app-tab',
  imports: [
    SimpleTabs,
    IconTabs,
    VerticalTabs,
    PillsTabs,
    JustifyTabs,
    MaterialStyleLeftTabs,
    MaterialStyleTabs,
    BorderTabs,
  ],
  templateUrl: './tab.html',
  styleUrls: ['./tab.scss'],
})
export class Tab {}
