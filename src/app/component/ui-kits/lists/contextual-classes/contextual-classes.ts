import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ContextualClass } from '../../../../shared/data/component/ui-kits/lists/lists';

@Component({
  selector: 'app-contextual-classes',
  imports: [],
  templateUrl: './contextual-classes.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./contextual-classes.scss'],
})
export class ContextualClasses {
  public contextualData = ContextualClass;
}
