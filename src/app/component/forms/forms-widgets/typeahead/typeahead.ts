import { Component } from '@angular/core';

import { FormattedResults } from './formatted-results/formatted-results';
import { GlobalConfiguration } from './global-configuration/global-configuration';
import { OpenFocusTyhead } from './open-focus-tyhead/open-focus-tyhead';
import { PreventManualEntry } from './prevent-manual-entry/prevent-manual-entry';
import { SelectOnExact } from './select-on-exact/select-on-exact';
import { SimpleTypehead } from './simple-typehead/simple-typehead';
import { TemplateForResults } from './template-for-results/template-for-results';
import { WikipediaSearch } from './wikipedia-search/wikipedia-search';

@Component({
  selector: 'app-typeahead',
  imports: [
    SimpleTypehead,
    WikipediaSearch,
    OpenFocusTyhead,
    FormattedResults,
    SelectOnExact,
    TemplateForResults,
    PreventManualEntry,
    GlobalConfiguration,
  ],
  templateUrl: './typeahead.html',
  styleUrls: ['./typeahead.scss'],
})
export class Typeahead {}
