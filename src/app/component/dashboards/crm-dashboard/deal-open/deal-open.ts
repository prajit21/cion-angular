import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Customer } from './customer/customer';
import { dealOpen } from '../../../../shared/data/component/deshboard/crm-dashboard';

@Component({
  selector: 'app-deal-open',
  imports: [Customer],
  templateUrl: './deal-open.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./deal-open.scss'],
})
export class DealOpen {
  public dealopenData = dealOpen;
}
